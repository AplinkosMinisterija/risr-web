import { FieldArray, Formik } from "formik";
import { isEmpty } from "lodash";
import { useRef, useState } from "react";
import styled from "styled-components";
import { device } from "../../styles";
import { Group } from "../../types";

import { getMaxValue, handleShowNumber, isNumber } from "../../utils/functions";
import { buttonsTitles } from "../../utils/texts";
import { validateFormRowInfo } from "../../utils/validation";
import Button, { ButtonColors } from "../buttons/Button";
import SimpleButton from "../fields/SimpleButton";
import TextField from "../fields/TextField";
import Icon from "./Icons";
import Modal from "./Modal";

const RenderKVP = () => {
  const items = ["K", "V", "P"];
  return (
    <>
      {items.map((group, index) => {
        return <TH key={index}>{group}</TH>;
      })}
    </>
  );
};

const RenderItems = ({ groups }: { groups: Group[] }) => {
  return (
    <>
      {groups.map((group, index) => {
        const colLength = isEmpty(group.children)
          ? 3
          : group?.children!?.length * 3 + 3;

        return (
          <TH colSpan={colLength} key={index}>
            {group.name}
          </TH>
        );
      })}
    </>
  );
};

const RenderTable = ({
  groups,
  items
}: {
  groups: Group[];
  items?: { name: string; items: any }[];
}) => {
  const innerItems = items?.map((item) => item?.items);
  const [current, setCurrent] = useState<any>({});
  const arrayHelperRef = useRef<any>(null);

  const setKVP = (input: string, onChange) => {
    const pattern = /^(?:[0-4]|)$/;
    if (!pattern.test(input)) return;

    onChange(input);
  };

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
        k: allItemsWithMax[0].DGMax.k,
        v: allItemsWithMax[0].DGMax.v,
        p: allItemsWithMax[0].DGMax.p
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
        [group.id!]: columnMax,
        ...childrenGroupMaxColumns
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

  return (
    <>
      <ButtonContainer>
        <SimpleButton
          type="button"
          onClick={() => setCurrent({ name: "", items: getEmptyItem() })}
        >
          + Pridėti naujus valstybės informacinį išteklius sudarančius duomenis
          arba jų grupę.
        </SimpleButton>
      </ButtonContainer>
      <MainContainer>
        <TableContainer>
          <Table>
            <THEAD>
              <TableRow>
                <TH maxWidth={"100px"} rowSpan={3} />
                <TH rowSpan={3}>
                  {
                    "Valstybės informacinį išteklių sudarantys duomenys ar jų grupės"
                  }
                </TH>
                <RenderItems groups={groups} />
                <TH colSpan={3} rowSpan={2}>
                  {
                    "Maksimalus valstybės informacinį išteklių sudarančių duomenų ar jų grupės KVP pažeidimo poveikio lygis"
                  }
                </TH>
                <TH colSpan={3} rowSpan={2}>
                  {
                    "Maksimalus valstybės informacinį išteklių sudarančių duomenų ar jų grupių KVP pažeidimo poveikio lygis informacinės sistemos, kurioje jie tvarkomi, lygmenius"
                  }
                </TH>
                <TH colSpan={1} rowSpan={3}>
                  {
                    "Valstybės informacinių išteklių rūšis, kuriai priskiriami valstybės informacinį išteklių sudarantys duomenys ir informacinė sistema, kurioje jie tvarkomi"
                  }
                </TH>
              </TableRow>
              <TableRow>
                {groups.map((group) => (
                  <RenderItems
                    groups={[
                      ...group.children!,
                      {
                        name: `Bendras poveikis sričiai ${group.name.slice(
                          0,
                          2
                        )}`
                      }
                    ]}
                  />
                ))}
              </TableRow>
              <TableRow>
                {groups.map((group) =>
                  [...group.children!, null].map(() => <RenderKVP />)
                )}
                <RenderKVP />
                <RenderKVP />
              </TableRow>
            </THEAD>
            <tbody>
              {!isEmpty(items) &&
                items!.map((item, index) => {
                  const groupInfo = rowMaxes.items[index];
                  const items = item.items;
                  return (
                    <TableRow>
                      <TD maxWidth={"100px"}>
                        <EditIconContainer>
                          <div
                            onClick={() => {
                              setCurrent({ index, ...item });
                            }}
                          >
                            <StyledEditIcon name="edit" />
                          </div>
                          <div
                            onClick={() => {
                              arrayHelperRef?.current &&
                                arrayHelperRef?.current?.remove(index);
                            }}
                          >
                            <StyledDeleteIcon name="deleteItem" />
                          </div>
                        </EditIconContainer>
                      </TD>
                      <TD>{item?.name}</TD>
                      {groups.map((group) => {
                        return (
                          <>
                            {group.children?.map((child, i) => {
                              const childItem = items[child?.id!];

                              return (
                                <>
                                  <TD>{handleShowNumber(childItem?.k)}</TD>
                                  <TD>{handleShowNumber(childItem?.v)}</TD>
                                  <TD>{handleShowNumber(childItem?.p)}</TD>
                                </>
                              );
                            })}
                            <TD>{groupInfo[group.id!]?.k || "-"}</TD>
                            <TD>{groupInfo[group.id!]?.v || "-"}</TD>
                            <TD>{groupInfo[group.id!]?.p || "-"}</TD>
                          </>
                        );
                      })}
                      <TD>{groupInfo.DGMax?.k || "-"}</TD>
                      <TD>{groupInfo.DGMax?.v || "-"}</TD>
                      <TD>{groupInfo.DGMax?.p || "-"}</TD>
                      {index === 0 && (
                        <>
                          <TD>{rowMaxes.ISMax?.k || "-"} </TD>
                          <TD>{rowMaxes.ISMax?.v || "-"}</TD>
                          <TD>{rowMaxes.ISMax?.p || "-"}</TD>
                          <TD>{rowMaxes.max || "-"}</TD>
                        </>
                      )}
                    </TableRow>
                  );
                })}

              <TableRow>
                <EndTD maxWidth={"100px"} />

                <EndTD>
                  {
                    "Maksimalus VII sudarančių duomenų ar jų grupių poveikio lygis sričiai ir jos pogrupiams"
                  }
                </EndTD>
                {groups.map((group) => {
                  return (
                    <>
                      {group.children?.map((child) => {
                        return (
                          <EndTD colSpan={3}>
                            {columnMaxes[child.id!] || "-"}
                          </EndTD>
                        );
                      })}
                      <EndTD colSpan={3}>{columnMaxes[group.id!] || "-"}</EndTD>
                    </>
                  );
                })}
              </TableRow>
            </tbody>
          </Table>
        </TableContainer>
      </MainContainer>
      <Modal onClose={() => setCurrent({})} visible={!isEmpty(current)}>
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
                        error={errors?.name}
                        name={"name"}
                        onChange={(email) => setFieldValue(`name`, email)}
                      />
                      {groups.map((group) => {
                        return (
                          <FormTitle>
                            {group.name}
                            {!isEmpty(group.children) &&
                              group.children?.map((item) => {
                                return (
                                  <>
                                    <FormSubTitle>{item.name}</FormSubTitle>
                                    <FormRow columns={3}>
                                      <TextField
                                        label={"K"}
                                        value={values.items[item.id!].k}
                                        name={"k"}
                                        error={errors?.items?.[item.id!]?.k}
                                        onChange={(k) =>
                                          setKVP(k, (k) =>
                                            setFieldValue(
                                              `items.${[item.id!]}.k`,
                                              k
                                            )
                                          )
                                        }
                                      />
                                      <TextField
                                        label={"V"}
                                        value={values.items[item.id!].v}
                                        error={errors?.items?.[item.id!]?.v}
                                        name={"v"}
                                        onChange={(v) =>
                                          setKVP(v, (v) =>
                                            setFieldValue(
                                              `items.${[item.id!]}.v`,
                                              v
                                            )
                                          )
                                        }
                                      />
                                      <TextField
                                        label={"P"}
                                        value={values.items[item.id!].p}
                                        error={errors?.items?.[item.id!]?.p}
                                        name={"p"}
                                        onChange={(p) =>
                                          setKVP(p, (p) =>
                                            setFieldValue(
                                              `items.${[item.id!]}.p`,
                                              p
                                            )
                                          )
                                        }
                                      />
                                    </FormRow>
                                  </>
                                );
                              })}
                          </FormTitle>
                        );
                      })}
                      <ButtonRow>
                        <Button
                          variant={ButtonColors.TRANSPARENT}
                          color={"black"}
                          onClick={() => setCurrent({})}
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
            );
          }}
        />
      </Modal>
    </>
  );
};

export default RenderTable;

const TableContainer = styled.div`
  width: 100%;
`;

const StyledEditIcon = styled(Icon)`
  font-size: 1.8rem;
  color: #697586;
  cursor: pointer;
`;

const StyledDeleteIcon = styled(Icon)`
  cursor: pointer;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.danger};
`;
const EditIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
`;

const ButtonContainer = styled.div`
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-end;
`;

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

export const FormRow = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  gap: 16px;
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
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

const FormTitle = styled.div`
  font-size: 1.6rem;
  color: #231f20;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #231f20;
  margin: 20px 0;
`;

const FormSubTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 10px;
  color: #231f20;
`;

const TableRow = styled.tr``;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
`;
const TH = styled.th<{ maxWidth?: string }>`
  background-color: #f2f2f2;
  border: 2px solid black;
  text-align: center;
  padding: 10px;
  min-width: ${({ maxWidth = "200px" }) => maxWidth};
`;
const THEAD = styled.thead`
  width: 100%;
`;

const TD = styled.td<{ maxWidth?: string }>`
  background-color: #f2f2f2;
  border: 2px solid black;
  text-align: center;
  padding: 10px;
  min-width: ${({ maxWidth = "200px" }) => maxWidth};
`;

const EndTD = styled.td<{ maxWidth?: string }>`
  background-color: #f2f2f2;
  border: 2px solid black;
  border-top: 4px solid black;
  text-align: center;
  padding: 10px;

  min-width: ${({ maxWidth = "200px" }) => maxWidth};
`;

const MainContainer = styled.div`
  overflow-x: scroll;
`;
