import { Form, Formik } from "formik";
import { isEmpty } from "lodash";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../api";
import BackButton from "../components/buttons/BackButton";
import Button from "../components/buttons/Button";
import SimpleContainer from "../components/containers/SimpleContainer";
import TextField from "../components/fields/TextField";
import { ErrorMessage } from "../components/other/ErrorMessage";
import FormTable from "../components/other/FormTable";
import LoaderComponent from "../components/other/LoaderComponent";
import { device } from "../styles";
import { handleAlert, isNew } from "../utils/functions";
import { slugs } from "../utils/routes";

import { buttonsTitles, pageTitles } from "../utils/texts";
import { validateForm } from "../utils/validation";

interface FormProps {
  name: string;
  code: string;
  items?: { name: string; items: any }[];
}

const RequestPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const title = isNew(id) ? pageTitles.newForm : pageTitles.form(id!);

  const { data: request, isLoading } = useQuery(
    ["form", id],
    () => api.getForm(id!),
    {
      onError: () => {
        navigate(slugs.forms);
      },
      enabled: !isNew(id)
    }
  );

  const { data: groups = [], isLoading: groupLoading } = useQuery(
    ["formGroups", id],
    () => api.getFormGroups(),
    {
      onError: () => {}
    }
  );

  const createForm = useMutation(
    (values: { [key: string]: any }) => api.createForm(values),
    {
      onError: () => {
        handleAlert();
      },
      onSuccess: () => {
        navigate(slugs.forms);
      },
      retry: false
    }
  );

  const updateForm = useMutation(
    (values: { [key: string]: any }) => api.updateForm(id!, values),
    {
      onError: () => {
        handleAlert();
      },
      onSuccess: () => {
        navigate(slugs.forms);
      },
      retry: false
    }
  );

  const submitLoading = updateForm.isLoading || createForm.isLoading;

  const handleSubmit = async (values: FormProps) => {
    const params = {
      name: values.name,
      code: values.code,
      items: values?.items?.map((item) => ({
        name: item.name,
        items: Object.values(item.items)
      }))
    };
    if (isNew(id)) {
      return await createForm.mutateAsync(params);
    }

    return await updateForm.mutateAsync(params);
  };

  const getItems = () =>
    request?.items.map((item) => ({
      name: item.name,
      items: item.items.reduce((prev, item) => {
        return {
          ...prev,
          [item.group]: { ...item }
        };
      }, {})
    }));

  const initialValues: FormProps = {
    name: request?.name || "",
    code: request?.code || "",
    items: !isEmpty(request?.items) ? [...getItems()!] : []
  };

  if (isLoading || groupLoading) {
    return <LoaderComponent />;
  }

  return (
    <MainContainer>
      <Formik
        validateOnChange={false}
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validateForm}
      >
        {({ values, errors, setFieldValue, handleSubmit }) => {
          return (
            <StyledForm>
              <BackButton />
              <Title>{title}</Title>
              <SimpleContainer title="Informacija">
                <FormRow columns={2}>
                  <TextField
                    label={"Pavadinimas"}
                    value={values.name}
                    name={"name"}
                    error={errors?.name}
                    onChange={(name) => setFieldValue("name", name)}
                  />
                  <TextField
                    label={"RISR kodas"}
                    value={values.code}
                    name={"code"}
                    error={errors?.code}
                    onChange={(code) => setFieldValue("code", code)}
                  />
                </FormRow>

                <FormTable items={values.items} groups={groups} />
                <ErrorMessage error={errors.items} />
              </SimpleContainer>
              <ButtonRow>
                <Button
                  onClick={() => handleSubmit()}
                  loading={submitLoading}
                  disabled={submitLoading}
                >
                  {buttonsTitles.save}
                </Button>
              </ButtonRow>
            </StyledForm>
          );
        }}
      </Formik>
    </MainContainer>
  );
};

export const FormRow = styled.div<{ columns?: number }>`
  display: grid;
  margin-top: 16px;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  gap: 16px;
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0;
`;

const StyledForm = styled(Form)`
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #121926;
  opacity: 1;
  line-height: 20px;
  margin: 12px 0px;
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 16px;
`;

export default RequestPage;
