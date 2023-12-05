import styled from "styled-components";
import { device } from "../styles";
import { descriptions, formLabels } from "../utils/texts";

export const CantLogin = () => {
  return (
    <>
      <H1>{formLabels.inActiveProfile}</H1>
      <Description>{descriptions.cantLogin} </Description>
    </>
  );
};

const Description = styled.div`
  text-align: center;
  font-size: 1.6rem;
  line-height: 26px;
  letter-spacing: 0px;
  color: #7a7e9f;
  width: 70%;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const H1 = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 44px;
  letter-spacing: 0px;
  color: #121a55;
  opacity: 1;
  margin: 0px 0px 16px 0px;

  @media ${device.mobileL} {
    padding-bottom: 0px;
  }
`;
