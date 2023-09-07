import styled from "styled-components";
import {
  BackgroundColor,
  nameColor,
  shortNameToFullName,
  valueToKVPIcon
} from "../../utils/texts";
import Icon from "./Icons";

const IsItem = ({ name, value }: { name: string; value: string }) => {
  const parsedValue = parseInt(value);

  return (
    <Container>
      <Row>
        <IconContainer color={BackgroundColor[parsedValue]}>
          <StyledIcon
            color={nameColor[parsedValue]}
            name={valueToKVPIcon[name]}
          />
        </IconContainer>
        <Column>
          <Name color={nameColor[parsedValue]}>{parsedValue}</Name>
          <Description>{shortNameToFullName[name]}</Description>
        </Column>
      </Row>
    </Container>
  );
};

const Description = styled.div`
  font-size: 1.2rem;
  line-height: 14px;
  color: #4b5565;
`;

const Name = styled.div<{ color: string }>`
  font-size: 6.4rem;
  line-height: 67px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const StyledIcon = styled(Icon)``;

const IconContainer = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default IsItem;
