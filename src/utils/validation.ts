import * as Yup from "yup";
import { validationTexts } from "./texts";

export const validateCreateTenantUser = Yup.object().shape({
  firstName: Yup.string().required(validationTexts.requireText).nullable(),
  lastName: Yup.string().required(validationTexts.requireText).nullable(),
  personalCode: Yup.string()
    .required(validationTexts.requireText)
    .length(11, validationTexts.personalCode)
    .nullable(),
  phone: Yup.string()
    .required(validationTexts.requireText)
    .trim()
    .matches(/^(86|\+3706)\d{7}$/, validationTexts.badPhoneFormat)
    .nullable(),
  email: Yup.string()
    .email(validationTexts.badEmailFormat)
    .required(validationTexts.requireText)
    .nullable()
});

export const validateFormRowInfo = (values: {
  name: string;
  items: { [key: string]: any };
}) => {
  const errors: any = {};

  if (!values.name) errors.name = validationTexts.requireText;
  const items = values.items;

  Object.keys(items).forEach((key) => {
    if (items?.[key]) {
      Object.keys(items?.[key]).forEach((innerKey) => {
        if (!items?.[key]?.[innerKey]) {
          if (!errors.items) {
            errors.items = {};
          }

          if (!errors.items[key]) {
            errors.items[key] = {};
          }

          errors.items[key][innerKey] = validationTexts.requireText;
        }
      });
    }
  });

  return errors;
};

export const validateForm = Yup.object().shape({
  name: Yup.string().required(validationTexts.requireText),
  code: Yup.string().required(validationTexts.requireText),
  items: Yup.array().min(
    1,
    "Privalomas bent vienas  valstybės informacinis išteklius sudarantis duomenis arba jų grupę."
  )
});

export const validateUpdateTenantUser = Yup.object().shape({
  firstName: Yup.string().required(validationTexts.requireText).nullable(),
  lastName: Yup.string().required(validationTexts.requireText).nullable(),
  phone: Yup.string()
    .required(validationTexts.requireText)
    .trim()
    .matches(/^(86|\+3706)\d{7}$/, validationTexts.badPhoneFormat)
    .nullable(),
  email: Yup.string()
    .email(validationTexts.badEmailFormat)
    .required(validationTexts.requireText)
});

export const validateProfileForm = Yup.object().shape({
  firstName: Yup.string()
    .required(validationTexts.requireText)
    .test("validFirstName", validationTexts.validFirstName, (values) => {
      if (/\d/.test(values || "")) return false;

      return true;
    }),
  lastName: Yup.string()
    .required(validationTexts.requireText)
    .test("validLastName", validationTexts.validLastName, (values) => {
      if (/\d/.test(values || "")) return false;

      return true;
    }),
  phone: Yup.string()
    .required(validationTexts.requireText)
    .trim()
    .matches(/(86|\+3706)\d{7}/, validationTexts.badPhoneFormat),
  email: Yup.string()
    .email(validationTexts.badEmailFormat)
    .required(validationTexts.requireText)
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required(validationTexts.requireText)
    .email(validationTexts.badEmailFormat),
  password: Yup.string().required(validationTexts.requireText)
});
