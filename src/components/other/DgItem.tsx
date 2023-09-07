import styled from "styled-components";
import Icon from "./Icons";

const DgItem = ({ name, value }: { name: string; value: string }) => {
  const parsedValue = parseInt(value);

  const valueToIconName = {
    0: "level0",
    1: "level1",
    2: "level2",
    3: "level3",
    4: "level4"
  };
  return (
    <Container>
      <Row>
        <StyledIcon
          width="120"
          height="100"
          name={valueToIconName[parsedValue]}
        />
        <Column>
          <Name>{name.toUpperCase()}</Name>
          <Description>
            Maksimalus valstybės informacinį išteklių sudarančių duomenų ar jų
            grupės KVP pažeidimo poveikio lygis
          </Description>
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

const Name = styled.div`
  font-size: 1.2rem;
  line-height: 14px;
  font-weight: bold;
  color: #4b5565;
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const StyledIcon = styled(Icon)``;

const Container = styled.div`
  background-color: white;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  opacity: 1;
  padding: 12px 34px;
  max-width: 297px;
  position: relative;
`;

const InfoIcon = styled(Icon)`
  font-size: 2.8rem;
  position: absolute;
  color: #697586;
  cursor: pointer;
  top: 5px;
  right: 24px;
`;

export default DgItem;
