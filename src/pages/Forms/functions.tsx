import { TableRow } from "../../components/tables/table";
import { Form, FormFilters, FormFiltersProps } from "../../types";
import { formatDate, formatDateFrom, formatDateTo } from "../../utils/format";

export const mapFormFilters = (filters: FormFilters): FormFiltersProps => {
  let params: FormFiltersProps = {};

  if (filters) {
    (!!filters.createdFrom || !!filters.createdTo) &&
      (params.createdAt = {
        ...(filters.createdFrom && {
          $gte: formatDateFrom(new Date(filters.createdFrom))
        }),
        ...(filters.createdTo && {
          $lt: formatDateTo(new Date(filters.createdTo))
        })
      });

    !!filters.code && (params.code = filters.code);
    !!filters.name && (params.name = filters.name);
  }

  return params;
};
export const mapForms = (forms: Form[]): TableRow[] =>
  forms.map((form: Form) => {
    const user = form?.createdBy?.firstName! + " " + form?.createdBy?.lastName;
    return {
      id: form.id,
      name: form.name,
      code: form.code,
      createdAt: formatDate(form?.createdAt!),
      createdBy: user
    };
  });
