import Form from "../pages/Form";
import Forms from "../pages/Forms";
import ProfilePage from "../pages/Profile";
import Profiles from "../pages/Profiles";
import TenantUserForm from "../pages/TenantUserForm";
import TenantUsers from "../pages/TenantUsers";
import { Profile } from "../types";
import { handleIsTenantOwner, handleIsTenantUser } from "./functions";
import { menuLabels } from "./texts";

export const slugs = {
  profile: "/profilis",
  login: "/login",
  profiles: "/profiliai",
  forms: "/anktetos",
  newForm: "/anketos/naujas",
  form: (id: string) => `/anketos/${id}`,
  tenantUsers: `/imones_darbuotojai`,
  tenantUser: (id?: string) => `/imones_darbuotojai/${id}`,
  newTenantUser: `/imones_darbuotojai/naujas`,
  cantLogin: "/negalima_jungtis"
};

export const externalRoutes = [
  {
    label: menuLabels.forms,
    slug: slugs.forms,
    internal: true
  }
];

const routes = [
  {
    label: menuLabels.profile,
    slug: slugs.profile,
    dropDown: true,
    component: <ProfilePage />
  },
  {
    label: menuLabels.profile,
    slug: slugs.forms,
    component: <Forms />
  },
  {
    slug: slugs.form(":id"),
    component: <Form />
  },

  {
    label: menuLabels.tenantUsers,
    slug: slugs.tenantUsers,
    dropDown: true,
    tenantOwner: true,
    component: <TenantUsers />
  },
  {
    slug: slugs.tenantUser(":id"),
    tenantOwner: true,
    component: <TenantUserForm />
  },

  {
    slug: slugs.profiles,
    component: <Profiles />
  }
];

export const filteredRoutes = (profile?: Profile): any =>
  routes.filter((route) => {
    if (!route?.slug) return false;
    if (route.tenantOwner) {
      return handleIsTenantOwner(profile?.role);
    }
    if (route.tenantOwner) {
      return handleIsTenantUser(profile);
    }

    return true;
  });
