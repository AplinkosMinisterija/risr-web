import styled from "styled-components";
import { device } from "../../styles";
import { StatusTypes } from "../../utils/constants";
import { buttonsTitles, inputLabels } from "../../utils/texts";
import Button, { ButtonColors } from "../buttons/Button";
import TextAreaField from "../fields/TextAreaField";
import Icon from "./Icons";
import Modal from "./Modal";

interface StatusModalProps {
  handleChange: any;
  values: { status?: StatusTypes; comment?: string };
  labels: { [key: string]: string };
}

export const actionButtonLabels = {
  [StatusTypes.APPROVED]: "Patvirtinti",
  [StatusTypes.RETURNED]: "Grąžinti taisyti",
  [StatusTypes.REJECTED]: "Atmesti",
  [StatusTypes.SUBMITTED]: "Pateikti"
};

export const buttonColors = {
  [StatusTypes.SUBMITTED]: ButtonColors.PRIMARY,
  [StatusTypes.APPROVED]: ButtonColors.SUCCESS,
  [StatusTypes.RETURNED]: ButtonColors.PRIMARY,
  [StatusTypes.REJECTED]: ButtonColors.DANGER
};

export const StatusModal = ({
  handleChange,
  values,
  labels
}: StatusModalProps) => {
  const handleClose = () => handleChange("status", "");
  const { status, comment } = values;

  return (
    <Modal onClose={handleClose} visible={!!values.status}>
      <Container>
        <IconContainer onClick={handleClose}>
          <StyledCloseButton name={"close"} />
        </IconContainer>
        <Title>{labels?.[status!]} </Title>

        <TextAreaField
          label={inputLabels.comment}
          value={comment}
          rows={2}
          name={"comment"}
          onChange={(comment) => handleChange("comment", comment)}
        />

        <BottomRow>
          <BackButton
            onClick={handleClose}
            variant={ButtonColors.TRANSPARENT}
            type="button"
            height={32}
            buttonPadding="6px 8px"
          >
            {buttonsTitles.cancel}
          </BackButton>
          <BackButton
            variant={buttonColors[status!]}
            color={status === StatusTypes.RETURNED ? "black" : undefined}
            type="submit"
            height={32}
            buttonPadding="6px 8px"
          >
            {actionButtonLabels[status!]}
          </BackButton>
        </BottomRow>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 20px;
  position: relative;
  min-width: 440px;
  @media ${device.mobileL} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledCloseButton = styled(Icon)`
  color: rgb(122, 126, 159);
  font-size: 2rem;
  @media ${device.mobileL} {
    display: none;
  }
`;

const BackButton = styled(Button)``;

const IconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  right: 9px;
  top: 9px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  gap: 16px;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #231f20;
`;
