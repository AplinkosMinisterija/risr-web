import styled from "styled-components";
import { KVPText, valueToLineIcon } from "../../utils/texts";
import Icon from "./Icons";

const MaxItem = ({ value }: { value: string }) => {
  const parsedValue = parseInt(value);

  return (
    <>
      <Container>
        <IconContainer>
          <StyledIcon name={valueToLineIcon[parsedValue]} />
          <InnerContainer>
            <Value>{parsedValue}</Value>
            <Description>{KVPText[parsedValue]}</Description>
          </InnerContainer>
          <InfoIcon name="info" />
        </IconContainer>
      </Container>
    </>
  );
};

const IconContainer = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  padding: 12px;
  background-color: white;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  min-width: 300px;
  justify-content: center;
`;

const InfoIcon = styled(Icon)`
  font-size: 2.8rem;
  position: absolute;
  color: #697586;
  cursor: pointer;
`;

const InnerContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;

const Description = styled.div`
  font: normal normal normal 14px/17px Atkinson Hyperlegible;
  color: #4b5565;
  white-space: nowrap;
  text-align: center;
`;

const Value = styled.div`
  font-size: 4.4rem;
  text-align: center;
`;

const StyledIcon = styled(Icon)``;

export default MaxItem;
