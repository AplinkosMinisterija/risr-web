import styled from "styled-components";
import { device } from "../../styles";
import { ChildrenType } from "../../types";

export interface LoginLayoutProps {
  children?: ChildrenType;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <Container>
      <LayoutImage src={"./LoginImage.jpg"} />
      <InnerContainer>
        <LogoContainer>
          <Logo>RISR</Logo>
        </LogoContainer>
        {children}
      </InnerContainer>
    </Container>
  );
};

const Logo = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100%;
  overflow-y: auto;
`;

const InnerContainer = styled.div`
  background-color: #ffffff;
  padding: 0 48px 16px 55px;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.mobileM} {
    padding: 16px;
  }
`;

const LayoutImage = styled.img`
  max-width: 70%;
  position: sticky;
  object-fit: cover;
  @media ${device.mobileXL} {
    width: 50%;
  }
  @media ${device.mobileL} {
    display: none;
  }
`;

export default LoginLayout;
