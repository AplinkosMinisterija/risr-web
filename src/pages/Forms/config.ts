import { FilterInputTypes } from "../../components/other/DynamicFilter/Filter";
import { formFiltersLabels } from "../../utils/texts";

export const filterConfig = {
  createdFrom: {
    label: formFiltersLabels.createdFrom,
    key: "createdFrom",
    inputType: FilterInputTypes.date
  },
  name: {
    label: formFiltersLabels.name,
    key: "name",
    inputType: FilterInputTypes.text
  },
  code: {
    label: formFiltersLabels.code,
    key: "code",
    inputType: FilterInputTypes.text
  },

  createdTo: {
    label: formFiltersLabels.createdTo,
    key: "createdTo",
    inputType: FilterInputTypes.date
  }
};

export const rowConfig = [["name"], ["code"], ["createdFrom", "createdTo"]];
