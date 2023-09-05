import Axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "universal-cookie";
import { Form, FormFiltersProps, Group, User, UserFilters } from "./types";
import { Populations, Resources, SortFields } from "./utils/constants";
const cookies = new Cookies();

interface GetAll {
  resource: string;
  page?: number | string;
  populate?: string[];
  filter?: string | any;
  query?: string;
  pageSize?: string;
  search?: string;
  searchFields?: string[];
  sort?: string[];
  scope?: string;
  fields?: string[];
}

export interface GetAllResponse<T> {
  rows: T[];
  totalPages: number;
  page?: number;
  pageSize: number;
  error?: any;
}

interface TableList<T = any> {
  filter?: T;
  page?: number | string;
  id?: string;
  pageSize?: string;
  isMy?: boolean;
  scope?: string;
  fields?: string[];
  resource?: Resources;
  search?: string;
}

interface AuthApiProps {
  resource: string;
  params?: any;
}

interface GetOne {
  resource: string;
  id?: string;
  populate?: string[];
  scope?: string;
}
interface UpdateOne {
  resource?: string;
  id?: string;
  params?: any;
}

interface Delete {
  resource: string;
  id: string;
}

interface Create {
  resource: string;
  params: any;
}

class Api {
  private readonly proxy: string = "/api";

  private AuthApiAxios: AxiosInstance;

  constructor() {
    this.AuthApiAxios = Axios.create();

    this.AuthApiAxios.interceptors.request.use(
      (config) => {
        if (!config.url) {
          return config;
        }
        const token = cookies.get("token");
        const profileId = cookies.get("profileId");
        if (token) {
          config.headers!.Authorization = "Bearer " + token;

          if (!isNaN(profileId)) config.headers!["X-Profile"] = profileId;
        }
        config.url = this.proxy + config.url;

        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  errorWrapper = async (endpoint: () => Promise<AxiosResponse<any, any>>) => {
    const { data } = await endpoint();

    return data;
  };

  getAll = async ({
    resource,
    page,
    populate,
    sort,
    filter,
    pageSize,
    search,
    query,
    searchFields,
    scope,
    fields
  }: GetAll) => {
    const config = {
      params: {
        pageSize: pageSize || 10,
        ...(!!populate && { populate }),
        ...(!!searchFields && { searchFields }),
        ...(!!search && { search }),
        page: page || 1,
        ...(!!filter && { filter }),
        ...(!!sort && { sort }),
        ...(!!query && { query }),
        ...(!!scope && { scope }),
        ...(!!fields && { fields })
      }
    };

    return this.errorWrapper(() =>
      this.AuthApiAxios.get(`/${resource}`, config)
    );
  };

  getOne = async ({ resource, id, populate, scope }: GetOne) => {
    const config = {
      params: {
        ...(!!populate && { populate }),
        ...(!!scope && { scope })
      }
    };

    return this.errorWrapper(() =>
      this.AuthApiAxios.get(`/${resource}${id ? `/${id}` : ""}`, config)
    );
  };

  update = async ({ resource, id, params }: UpdateOne) => {
    return this.errorWrapper(() =>
      this.AuthApiAxios.patch(`/${resource}/${id}`, params)
    );
  };

  delete = async ({ resource, id }: Delete) => {
    return this.errorWrapper(() =>
      this.AuthApiAxios.delete(`/${resource}/${id}`)
    );
  };
  create = async ({ resource, params }: Create) => {
    return this.errorWrapper(() =>
      this.AuthApiAxios.post(`/${resource}`, params)
    );
  };

  checkAuth = async (): Promise<User> => {
    return this.errorWrapper(() => this.AuthApiAxios.get("/users/me"));
  };

  logout = async () => {
    return this.errorWrapper(() => this.AuthApiAxios.post("/users/logout"));
  };

  authApi = async ({ resource, params }: AuthApiProps) => {
    return this.errorWrapper(() =>
      this.AuthApiAxios.post(`/${resource}`, params || {})
    );
  };

  refreshToken = async () => {
    return this.authApi({
      resource: Resources.REFRESH_TOKEN,
      params: { token: cookies.get("refreshToken") }
    });
  };

  login = async (params: any) => {
    return this.authApi({
      resource: Resources.LOGIN,
      params
    });
  };

  eGatesSign = async () => {
    return this.authApi({
      resource: Resources.E_GATES_SIGN
    });
  };

  eGatesLogin = async (params) => {
    return this.authApi({
      resource: Resources.E_GATES_LOGIN,
      params
    });
  };

  forms = async ({
    filter,
    page,
    pageSize
  }: TableList<FormFiltersProps>): Promise<GetAllResponse<Form>> =>
    await this.getAll({
      resource: Resources.FORMS,
      populate: [Resources.CREATED_BY],
      sort: [SortFields.CREATED_AT],
      page,
      filter,
      pageSize
    });

  getForms = async ({
    filter,
    page,
    pageSize
  }: TableList<FormFiltersProps>): Promise<GetAllResponse<Form>> =>
    await this.getAll({
      resource: Resources.FORMS,
      populate: [Resources.CREATED_BY],
      sort: [SortFields.CREATED_AT],
      page,
      filter,
      pageSize
    });

  getForm = async (id: string): Promise<Form> =>
    await this.getOne({
      resource: Resources.FORMS,
      id
    });

  getFormGroups = async (): Promise<Group[]> =>
    await this.getAll({
      resource: Resources.FORMS_GROUPS,
      populate: [Populations.CHILDREN]
    });

  createForm = async (params: any): Promise<Form> => {
    return await this.create({
      resource: Resources.FORMS,
      params
    });
  };

  updateForm = async (id: string, params: any): Promise<Form> => {
    return await this.update({
      resource: Resources.FORMS,
      params,
      id
    });
  };

  tenantUsers = async ({
    filter,
    page,
    pageSize
  }: TableList<UserFilters>): Promise<GetAllResponse<User>> =>
    await this.getAll({
      resource: Resources.USERS,
      page,
      populate: [Populations.ROLE],
      sort: [SortFields.LAST_NAME],
      filter,
      pageSize
    });

  tenantUser = async (id: string): Promise<User> =>
    await this.getOne({
      resource: Resources.USERS,
      populate: [Populations.ROLE],
      id
    });

  createTenantUser = async (params: any): Promise<User> => {
    return await this.create({
      resource: Resources.USERS,
      params
    });
  };

  updateTenantUser = async (params: any, id?: string): Promise<User> => {
    return await this.update({
      resource: Resources.USERS,
      params,
      id
    });
  };

  deleteTenantUser = async (id: string): Promise<User> =>
    await this.delete({
      resource: Resources.USERS,
      id
    });

  updateProfile = async (id: string, params: any): Promise<User> =>
    await this.update({
      resource: Resources.USERS,
      params,
      id
    });

  getMapToken = async () =>
    await this.getOne({
      resource: Resources.MAPS_AUTH
    });
}

const api = new Api();

export default api;
