import { map } from "lodash";
import { useRef } from "react";
import styled from "styled-components";
import { device } from "../../styles";
import { bytesToMb, handleAlert } from "../../utils/functions";
import { inputLabels } from "../../utils/texts";
import { validateFileSizes, validateFileTypes } from "../../utils/validation";
import Icon from "../other/Icons";
import LoaderComponent from "../other/LoaderComponent";
import FieldWrapper from "./components/FieldWrapper";

export type FileProps = {
  url: string;
  name: string;
  size: number;
  main?: boolean;
};

export interface FileFieldProps {
  onDelete?: (files: File[]) => void;
  onUpload?: (files: File[]) => void;
  files: FileProps[] | File[] | any[];
  loading?: boolean;
  label: string;
  disabled: boolean;
  error?: string;
  showError?: boolean;
  multiple?: boolean;
}

export const availableMimeTypes = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "application/pdf"
];

const availableExtensionsTypes = [".png", ".jpg", ".jpeg", ".pdf"];

const DragAndDropUploadField = ({
  onDelete,
  onUpload,
  multiple = true,
  files,
  label,
  disabled,
  loading,
  error,
  showError = false
}: FileFieldProps) => {
  const inputRef = useRef<any>(null);

  const handleSetFiles = (currentFiles: File[]) => {
    const isValidFileTypes = validateFileTypes(currentFiles);
    if (!isValidFileTypes) return handleAlert("badFileTypes");
    const isValidFileSizes = validateFileSizes(currentFiles);
    if (!isValidFileSizes) return handleAlert("fileSizesExceeded");

    onUpload && onUpload(currentFiles);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (disabled) return;
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files: File[] = Array.from(e.dataTransfer.files);
      handleSetFiles(files);
    }
  };

  const handleChange = (e: any) => {
    if (disabled) return;
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const files: File[] = Array.from(e.target.files);
      handleSetFiles(files);
    }
  };

  const onButtonClick = () => {
    if (disabled) return;

    inputRef?.current?.click();
  };

  const handleDelete = (e, index) => {
    e.stopPropagation();

    if (onDelete) {
      onDelete([...files?.slice(0, index), ...files?.slice(index + 1)]);
    }
  };

  return (
    <>
      {!disabled && (
        <FieldWrapper error={error} showError={showError} label={label}>
          <UploadFileContainer
            error={!!error}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={onButtonClick}
          >
            <Input
              ref={inputRef}
              type="file"
              accept={availableExtensionsTypes.join(", ")}
              multiple={multiple}
              onChange={handleChange}
            />
            <TextRow>
              <BoldText>{inputLabels.pressToWant}</BoldText>
              <Text>{inputLabels.uploadOrDragFilesHere}</Text>
            </TextRow>
            <Text>{inputLabels.fileTypesAndMaxSize}</Text>
          </UploadFileContainer>
        </FieldWrapper>
      )}
      {loading && <LoaderComponent />}
      {map(files, (file, index) => {
        if (!file) return <></>;

        return (
          <FileContainer key={`${index}-file`}>
            <FileInnerContainer>
              <FileName>{file?.name}</FileName>
              <FileSize>{bytesToMb(file.size)}</FileSize>
            </FileInnerContainer>
            <IconContainer
              href={file?.url}
              target="_blank"
              download={file?.name}
            >
              <StyledIcon name="download" />
            </IconContainer>
            {!disabled && (
              <IconContainer
                onClick={(e) => {
                  handleDelete(e, index);
                }}
              >
                <StyledIcon name="remove" />
              </IconContainer>
            )}
          </FileContainer>
        );
      })}
    </>
  );
};

const IconContainer = styled.a`
  margin-top: auto;
  height: 40px;
  display: flex;
  @media ${device.mobileL} {
    margin-bottom: 0px;
    height: auto;
  }
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  font-size: 1.8rem;
  color: #9aa4b2;
  margin: auto 0 auto 16px;
  @media ${device.mobileL} {
    margin: 8px 0 16px 0;
  }
`;

const Text = styled.div`
  font-size: 1.1rem;
  color: #697586;
  text-align: center;
`;

const FileName = styled.div`
  font-size: 1.4rem;
  color: #121926;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
`;

const FileInnerContainer = styled.div`
  width: 90%;
`;

const FileSize = styled.div`
  font-size: 1.2rem;
  color: #4b5565;
`;
const BoldText = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #121926;
  margin-right: 4px;
`;

const Input = styled.input`
  display: none;
`;

const FileContainer = styled.div<{ opacity?: number }>`
  margin-top: 4px;
  opacity: ${({ opacity }) => opacity || 1};
  position: relative;
  background-color: white;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  padding: 3px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TextRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const UploadFileContainer = styled.div<{ error: boolean }>`
  cursor: pointer;
  background-color: #eeebe53d;
  border: 2px dashed
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.border)};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 77px;
`;

export default DragAndDropUploadField;
