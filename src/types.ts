import {
  DeliveryTypes,
  FormDataFields,
  FormObjectType,
  FormProviderType,
  FormType,
  HistoryTypes,
  PurposeTypes,
  RolesTypes,
  StatusTypes,
  TableItemWidth
} from "./utils/constants";

export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: RolesTypes;
  active?: boolean;
  phone?: string;
  mobilePhone?: string;
  password?: string;
  legalPerson?: string;
  personalCode?: string;
  duties?: string;
  maxForms?: string;
  maxLoops?: string;
  accessDate?: Date;
  getData?: boolean;
  stats?: { approvedForms: number; rejectedForms: number };
  isExpert?: boolean;
  error?: string;
  profiles?: Profile[];
}

export type ProfileId = "freelancer" | "expert" | string;

export interface Profile {
  id: ProfileId;
  name: string;
  freelancer: boolean;
  email?: string;
  role: RolesTypes;
}

export interface AuthState {
  loggedIn: boolean;
}

export type Column = {
  label: string;
  mobileOrder?: number;
  desktopOrder?: number;
  show: boolean;
  visible?: boolean;
  width?: TableItemWidth;
};

export type Columns = {
  [key: string]: Column;
};

export interface Sources {
  id?: string;
  name: string;
  createdBy?: User;
  createdAt: string;
}

export type FileProps = {
  url: string;
  name: string;
  size: number;
};

export type ResponseFileProps = {
  url: string;
  filename: string;
  size: number;
};

export interface ListResultProps<T> {
  rows?: T[];
  totalPages?: number;
  error?: string;
}

export type HandleChangeType = (name: string, value: any) => void;
export type ChildrenType = string | JSX.Element | JSX.Element[] | any;

export interface DeleteInfoProps {
  deleteButtonText: string;
  deleteDescriptionFirstPart: string;
  deleteDescriptionSecondPart: string;
  deleteTitle: string;
  deleteName: string;
  deleteFunction?: () => void;
}

export interface UserFilters {
  firstName?: string;
  lastName?: string;
}

export interface FormFiltersProps {
  tenant?: string | number;
  createdAt?: { $gte?: Date; $lt?: Date };
  code?: string;
  name?: string;
}

export interface FormFilters {
  createdFrom?: string;
  code?: string;
  name?: string;
  createdTo?: string;
  createdBy?: User;
}

export interface Form {
  id?: string;
  name?: string;
  code?: string;
  items: {
    name: string;
    items: { k: string; v: string; p: string; group: string }[];
  }[];
  createdBy?: User;
  createdAt?: Date;
}

export interface Group {
  id?: string;
  parent?: Group;
  children?: Group[];
  name: string;
}
