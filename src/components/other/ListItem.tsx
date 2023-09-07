import { useState } from "react";
import styled from "styled-components";
import { device } from "../../styles";
import { Group } from "../../types";
import { handleShowNumber } from "../../utils/functions";
import Icon from "./Icons";

const ListItem = ({
  group,
  groupInfo,
  items
}: {
  group: Group;
  groupInfo: { [key: string]: any };
  items: { [key: string]: any };
}) => {
  const [expand, setExpand] = useState(false);

  const valueToIconName = {
    0: "",
    1: "max",
    2: "medium",
    3: "medium",
    4: "min"
  };

  const nameColor = {
    0: "gray",
    1: "#E73F76",
    2: "#FF9A3E",
    3: "#FF9A3E",
    4: "#14A166"
  };

  const item = groupInfo[group.id!];
  const parsedK = parseInt(item?.k);
  const parsedV = parseInt(item?.v);
  const parsedP = parseInt(item?.p);

  return (
    <Container>
      <Row>
        <GroupName>{group.name}</GroupName>
        <InnerRow>
          <IconRow>
            <StyledIcon
              width="20"
              height="14"
              name={valueToIconName[item?.k]}
            />
            <Name color={nameColor[parsedK]}>{item?.k}</Name>
          </IconRow>
          <IconRow>
            <StyledIcon
              width="20"
              height="14"
              name={valueToIconName[item?.v]}
            />
            <Name color={nameColor[parsedV]}>{item?.v}</Name>
          </IconRow>
          <IconRow>
            <StyledIcon
              width="20"
              height="14"
              name={valueToIconName[item?.p]}
            />
            <Name color={nameColor[parsedP]}>{item?.p}</Name>
          </IconRow>
          <div onClick={() => setExpand(!expand)}>
            <DropwDownIcon name={"dropdownArrow"} />
          </div>
        </InnerRow>
      </Row>
      {expand && (
        <>
          <HeadingRow>
            <TableTitle>Pavadinimas</TableTitle>
            <InnerRow>
              <IconRow>
                <TableTitle>K</TableTitle>
              </IconRow>
              <IconRow>
                <TableTitle>V</TableTitle>
              </IconRow>
              <IconRow>
                <TableTitle>P</TableTitle>
              </IconRow>
              <IconRow />
            </InnerRow>
          </HeadingRow>
          {group.children?.map((child, i) => {
            const childItem = items[child?.id!];

            return (
              <TableRow>
                <TableValue>{child.name}</TableValue>
                <InnerRow>
                  <IconRow>
                    <TableValue>{handleShowNumber(childItem?.k)}</TableValue>
                  </IconRow>
                  <IconRow>
                    <TableValue>{handleShowNumber(childItem?.v)}</TableValue>
                  </IconRow>
                  <IconRow>
                    <TableValue>{handleShowNumber(childItem?.p)}</TableValue>
                  </IconRow>
                  <IconRow />
                </InnerRow>
              </TableRow>
            );
          })}
        </>
      )}
    </Container>
  );
};

const Name = styled.div`
  font-size: 2rem;
  color: ${({ color }) => color};
`;

const TableTitle = styled.div`
  font-size: 1.4rem;
  align-items: 17px;
  font-weight: bold;
  color: #121926;
`;

const TableValue = styled.div`
  font-size: 1.4rem;
  align-items: 17px;
  color: #121926;
`;

const InnerRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 50px;
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

const IconRow = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 16px;
`;

const Container = styled.div`
  background-color: white;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  padding: 12px 24px;
  opacity: 1;
  width: 100%;
`;

const GroupName = styled.div`
  font-size: 1.6rem;
  line-height: 19px;
  color: #121926;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 12px 0;
  padding-bottom: 11px;
  border-bottom: 0.5px solid #cdd5df;
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  width: 100%;
  padding-bottom: 11px;
  border-bottom: 0.5px solid #cdd5df;
`;

const StyledIcon = styled(Icon)``;

const DropwDownIcon = styled(Icon)`
  color: #cdd5df;
  font-size: 2.8rem;
  margin-right: 12px;
`;

export default ListItem;
