import { useState } from "react";
import styled from "styled-components";
import { Group } from "../../types";
import {
  BackgroundColor,
  KVPText,
  nameColor,
  valueToLevelIcon
} from "../../utils/texts";
import Icon from "./Icons";

const CombinedContainer = ({
  group,
  groupInfo
}: {
  group: Group;
  groupInfo: { [key: string]: any };
}) => {
  const [index, setIndex] = useState(0);
  const { parent, ...rest } = groupInfo;
  const children = group.children!;
  const currentChild = children[index];
  const childValue = rest[currentChild?.id!];

  const previous = () => {
    const currentIndex = (index - 1 + children.length) % children.length;
    setIndex(currentIndex);
  };

  const next = () => {
    const currentIndex = (index + 1) % children.length;
    setIndex(currentIndex);
  };

  const parsedParent = parseInt(parent);

  return (
    <Container>
      <Row>
        <NumberContainer color={BackgroundColor[parent]}>
          <Number color={nameColor[parent]}>{parsedParent}</Number>
        </NumberContainer>
        <ParentName>{group.name}</ParentName>
      </Row>
      <ContentRow>
        <RightCircle onClick={previous}>
          <StyledArrow name="leftArrow" />
        </RightCircle>
        <Column>
          <LevelRow>
            <Icon width="40" height="30" name={valueToLevelIcon[childValue]} />
            <LevelDescription>{KVPText[childValue]}</LevelDescription>
          </LevelRow>
          <Description>{currentChild.name}</Description>
        </Column>
        <LeftCircle onClick={next}>
          {" "}
          <StyledArrow name="rightArrow" />
        </LeftCircle>
      </ContentRow>
    </Container>
  );
};

const ContentRow = styled.div`
  display: flex;
  gap: 22px;
  justify-content: space-between;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 10px;
  margin: 0 16px 23px 16px;
`;

const ParentName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #4b5565;
`;

const NumberContainer = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 8px;
  height: 28px;
`;

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 16px 0px;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  opacity: 1;
`;

const StyledArrow = styled(Icon)`
  cursor: pointer;
  font-size: 1.4rem;
  color: #4b5565;
`;

const Number = styled.div<{ color: string }>`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const LeftCircle = styled.div`
  width: 19px;
  height: 37px;
  background-color: #f1f1f4;
  border-radius: 10rem 0 0 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LevelDescription = styled.div`
  text-align: left;
  font: normal normal bold 16px/16px Atkinson Hyperlegible;
  letter-spacing: 0px;
  color: #4b5565;
  opacity: 1;
`;

const LevelRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const RightCircle = styled.div`
  width: 19px;
  height: 37px;
  background-color: #f1f1f4;
  border-radius: 0 10rem 10rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  text-align: center;
  font: normal normal normal 12px/14px Atkinson Hyperlegible;
  color: #4b5565;
`;

export default CombinedContainer;
