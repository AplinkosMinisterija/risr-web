import { useMediaQuery } from "@material-ui/core";
import { FieldArray, Formik } from "formik";
import { isEmpty } from "lodash";
import { useRef, useState } from "react";
import styled from "styled-components";
import { device } from "../../styles";
import { Group } from "../../types";
import { getMaxValue, isNumber } from "../../utils/functions";
import { buttonsTitles } from "../../utils/texts";
import { validateFormRowInfo } from "../../utils/validation";
import Button, { ButtonColors } from "../buttons/Button";
import TextField from "../fields/TextField";
import CombinedContainer from "./CombinedContainer";
import DgItem from "./DgItem";
import FormItem from "./FormItem";
import Icon from "./Icons";
import IsItem from "./IsItem";
import ListItem from "./ListItem";
import MaxItem from "./MaxItem";
import Modal from "./Modal";

const RenderTable = ({
  groups,
  items
}: {
  groups: Group[];
  items?: { name: string; items: any }[];
}) => {
  const innerItems = items?.map((item) => item?.items);
  const isMobile = useMediaQuery(device.mobileL);
  const itemsEmpty = isEmpty(innerItems);

  const [current, setCurrent] = useState<any>({});
  const [tabIndex, setTabIndex] = useState<any>(0);
  const arrayHelperRef = useRef<any>(null);

  const handleGetRowMaxes = () => {
    if (!innerItems) return [];

    const KVPMaxes: {
      [key: string]: { k: any; v: any; p: any };
    }[] = innerItems.map((item) => {
      return groups.reduce((prev, group) => {
        const getAllValues = (key) =>
          getMaxValue(
            group?.children?.flat().map((group) => item?.[group?.id!]?.[key])!
          );

        const k = getAllValues("k");
        const v = getAllValues("v");
        const p = getAllValues("p");

        return {
          ...prev,
          [group.id!]: {
            k,
            v,
            p
          }
        };
      }, {});
    });

    const allItemsWithMax = KVPMaxes.map((item) => {
      const values = Object.values(item);

      return {
        ...item,
        DGMax: values.reduce(
          (prev: any, item: any) => {
            return {
              k: getMaxValue([prev.k, item.k]),
              v: getMaxValue([prev.v, item.v]),
              p: getMaxValue([prev.p, item.p])
            };
          },
          { k: values[0]?.k, v: values[0]?.v, p: values[0]?.p }
        )
      };
    });

    const ISMax = allItemsWithMax.reduce(
      (prev: any, item: any) => {
        const { k, v, p } = item.DGMax!;

        return {
          k: getMaxValue([prev?.k, k]),
          v: getMaxValue([prev?.v, v]),
          p: getMaxValue([prev?.p, p])
        };
      },
      {
        k: allItemsWithMax[0]?.DGMax?.k,
        v: allItemsWithMax[0]?.DGMax?.v,
        p: allItemsWithMax[0]?.DGMax?.p
      }
    );

    const max = getMaxValue([ISMax.k, ISMax.p, ISMax.v]);

    return { items: allItemsWithMax, ISMax, max };
  };

  const rowMaxes: any = handleGetRowMaxes();

  const handleGetColumnMaxes = () => {
    if (!innerItems) return {};

    const allItems = groups.reduce((prev, group) => {
      const childrenGroupMaxColumns = group.children?.reduce((prev, curr) => {
        const childItems = innerItems
          .map((item) => {
            if (!item?.[curr.id!]) return "";

            const { group, ...rest } = item?.[curr.id!];
            return Object.values(rest);
          })
          .flat();

        const max = getMaxValue(childItems);

        return { ...prev, [curr.id!]: max };
      }, {});

      const columnMax = rowMaxes?.items?.reduce((prev: any, row: any) => {
        const kvp: number[] = Object.values(row?.[group.id!]);
        return getMaxValue([prev, ...kvp]);
      }, undefined);

      return {
        ...prev,
        [group.id!]: { parent: columnMax, ...childrenGroupMaxColumns }
      };
    }, {});

    return allItems;
  };

  const columnMaxes = handleGetColumnMaxes();

  const getEmptyItem = () =>
    groups
      .map((group) => group.children)
      .flat()
      .reduce((prev, item: any) => {
        return {
          ...prev,
          [item.id]: { group: item.id, k: "", v: "", p: "" }
        };
      }, {} as any);

  const dg = rowMaxes?.items?.[tabIndex]?.DGMax;

  const is = rowMaxes?.ISMax;
  const max = rowMaxes?.max;

  return (
    <>
      {itemsEmpty ? (
        <EmptyStateContainer
          onClick={() => {
            setCurrent({ name: "", items: getEmptyItem() });
          }}
        >
          <TextEmptyState>
            Pridėti naujus valstybės informacinį išteklius sudarančius duomenis
            arba jų grupę
          </TextEmptyState>
        </EmptyStateContainer>
      ) : (
        <>
          <DgContainer>
            {is && (
              <IsContainer>
                {Object.keys(is).map((key) => (
                  <IsItem name={key} value={is[key]} />
                ))}
                <InfoIcon name="info" />
              </IsContainer>
            )}

            {max && <MaxItem value={max} />}
          </DgContainer>

          <CombinedRow>
            {groups.map((group) => {
              return (
                <CombinedContainer
                  group={group}
                  groupInfo={columnMaxes[group?.id!]}
                />
              );
            })}
          </CombinedRow>
          <MiniTextEmptyState
            onClick={() => {
              setCurrent({ name: "", items: getEmptyItem() });
            }}
          >
            Pridėti naujus valstybės informacinį išteklius sudarančius duomenis
            arba jų grupę
          </MiniTextEmptyState>
          <TabContainer>
            {items?.map((item, index) => {
              return (
                <TabButton
                  onClick={() => setTabIndex(index)}
                  disabled={false}
                  isActive={index === tabIndex}
                >
                  {item.name}
                </TabButton>
              );
            })}
          </TabContainer>

          {!isEmpty(items) && (
            <ItemRow>
              <ItemContainer>
                <ItemName>{items?.[tabIndex].name}</ItemName>{" "}
                <div
                  onClick={() => {
                    setCurrent({ index: tabIndex, ...items?.[tabIndex] });
                  }}
                >
                  <StyledEditIcon name="edit" />
                </div>
              </ItemContainer>
              <DeleteButton
                onClick={() => {
                  setTabIndex(0);
                  arrayHelperRef?.current &&
                    arrayHelperRef?.current?.remove(tabIndex);
                }}
                variant={ButtonColors.TRANSPARENT}
                type="button"
                leftIcon={<StyledIcon name="deleteItem" />}
                buttonPadding="6px 8px"
              >
                {!isMobile ? buttonsTitles.delete : ""}
              </DeleteButton>
            </ItemRow>
          )}

          {dg && (
            <DgContainer>
              {Object.keys(dg).map((key) => {
                return <DgItem name={key} value={dg[key]} />;
              })}
            </DgContainer>
          )}

          {!isEmpty(items) && (
            <ItemsContainer>
              {groups.map((group) => {
                return (
                  <ListItem
                    group={group}
                    groupInfo={rowMaxes.items[tabIndex]}
                    items={items?.[tabIndex].items}
                  />
                );
              })}
            </ItemsContainer>
          )}
        </>
      )}
      <FieldArray
        name={`items`}
        render={(arrayHelpers) => {
          arrayHelperRef.current = arrayHelpers;

          const handleSubmit = (values) => {
            if (isNumber(current.index)) {
              arrayHelpers.replace(current?.index, values);
            } else {
              arrayHelpers.push(values);
            }

            setCurrent({});
          };

          return (
            <Modal onClose={() => setCurrent({})} visible={!isEmpty(current)}>
              <Formik
                validateOnChange={false}
                enableReinitialize={true}
                initialValues={current}
                onSubmit={handleSubmit}
                validate={(values) => {
                  return validateFormRowInfo(values);
                }}
              >
                {({ values, errors, setFieldValue, handleSubmit }) => {
                  return (
                    <Container>
                      <IconContainer onClick={() => setCurrent({})}>
                        <StyledCloseButton name={"close"} />
                      </IconContainer>
                      <Title>
                        {
                          "Valstybės informacinį išteklių sudarantys duomenis ar jų grupė"
                        }
                      </Title>
                      <TextField
                        label={"Pavadinimas"}
                        value={values.name}
                        error={errors?.name!}
                        name={"name"}
                        onChange={(email) => setFieldValue(`name`, email)}
                      />
                      {groups.map((group) => {
                        return (
                          <>
                            <FormItem
                              group={group}
                              values={values}
                              errors={errors}
                              setFieldValue={setFieldValue}
                            />
                          </>
                        );
                      })}
                      <ButtonRow>
                        <Button
                          variant={ButtonColors.TRANSPARENT}
                          onClick={() => setCurrent({})}
                          color="black"
                          type="button"
                        >
                          {buttonsTitles.cancel}
                        </Button>

                        <Button onClick={() => handleSubmit()} type="button">
                          {isNumber(current.index)
                            ? buttonsTitles.update
                            : buttonsTitles.add}
                        </Button>
                      </ButtonRow>
                    </Container>
                  );
                }}
              </Formik>
            </Modal>
          );
        }}
      />
    </>
  );
};

export default RenderTable;

const Container = styled.div`
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 20px;
  position: relative;
  height: fit-content;
  min-width: 600px;
  background-color: white;
  flex-basis: auto;
  margin: auto;

  @media ${device.mobileL} {
    min-width: 100%;
    min-height: 100%;
    border-radius: 0px;
  }

  @media ${device.mobileXL} {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const CombinedRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 8px;
  margin-bottom: 16px;
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

const StyledCloseButton = styled(Icon)`
  color: rgb(122, 126, 159);
  font-size: 2rem;
  @media ${device.mobileL} {
    display: none;
  }
`;

const IconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  right: 9px;
  top: 9px;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #231f20;
  margin: 20px 0;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DgContainer = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
  margin-bottom: 22px;
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`;

const ItemRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;

const TabContainer = styled.div`
  display: flex;
  flex: 1;
  border-bottom: 1px #c4c4c4 solid;
  margin-bottom: 24px;
  white-space: nowrap;
  overflow-x: auto;
`;

const TabButton = styled.div<{ isActive: boolean; disabled: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border-bottom: ${({ isActive, theme }) =>
    `2px ${isActive ? theme.colors.primary : "transparent"} solid`};
  margin-right: 24px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  font-size: 1.4rem;
  color: #121926;
`;

const ItemName = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: #121926;
`;

const IsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background-color: white;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  gap: 63px;
  width: 100%;
`;

const EmptyStateContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextEmptyState = styled.div`
  font-size: 2rem;
  color: #0862ab;
  cursor: pointer;
`;

const MiniTextEmptyState = styled.div`
  font-size: 1.4rem;
  color: #0862ab;
  cursor: pointer;
`;

const StyledEditIcon = styled(Icon)`
  font-size: 1.8rem;
  color: #697586;
  cursor: pointer;
`;

const DeleteButton = styled(Button)`
  button {
    border-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.danger};
  }
  min-width: fit-content;
`;
const StyledIcon = styled(Icon)`
  cursor: pointer;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.danger};
  margin-right: 8px;
  @media ${device.mobileL} {
    margin: 0;
  }
`;

const InfoIcon = styled(Icon)`
  font-size: 2.8rem;
  color: #697586;
  cursor: pointer;
`;
