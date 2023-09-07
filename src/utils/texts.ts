import { RolesTypes, ServerErrors } from "./constants";

export const emptyStateLabels = {
  form: "Jūs neturite pateikę anketų . Sukurkite ",
  user: "Jūs neturite Naudotojų. Sukurkite ",
  request: "Jūs neturite pateikę prašymų. Pateikite ",
  excerpt: "Jūs neturite pateikę išrašų prašymų Pateikite "
};

export const emptyStateUrlLabels = {
  form: "naują  anketą",
  user: "naują naudotoją",
  request: "naują prašymą"
};

export const url = {
  new: "naujas",
  publicUETK: "https://uetk.biip.lt/",
  upload: "/api/public/files",
  termsAndConditions: "https://uetk.biip.lt/duomenu-teikimo-taisykles/"
};

export const subTitles = {
  dataUpdate: "Duomenų koregavimas",
  legalPerson: "Juridinis asmuo"
};

export const formFiltersLabels = {
  createdFrom: "Sukūrimo data nuo",
  createdTo: "Sukūrimo data iki",
  name: "Pavadinimas",
  code: "Kodas"
};

export const userFilterLabels = {
  firstName: "Vardas",
  lastName: "Pavardė"
};

export const usersLabels = {
  fullName: { label: "Vardas, pavardė", show: true },
  email: { label: "Elektroninis paštas", show: true },
  phone: { label: "Telefono numeris", show: true }
};

export const tenantUsersColumns = {
  fullName: { label: "Vardas, pavardė", show: true },
  email: { label: "Elektroninis paštas", show: true },
  role: { label: "Teisė", show: true }
};

export const formColumns = {
  name: {
    label: "Pavadinimas",
    mobileOrder: 1,
    desktopOrder: 1,
    show: true
  },
  code: {
    label: "Kodas",
    mobileOrder: 3,
    desktopOrder: 2,
    show: true
  },

  createdAt: {
    label: "Duomenų įvedimo data",
    mobileOrder: 6,
    desktopOrder: 5,
    show: true
  },
  createdBy: {
    label: "Sukūrė",
    mobileOrder: 2,
    desktopOrder: 7,
    show: true
  }
};
export const pageTitles = {
  form: (id: string) => `Anketa nr. ${id}`,
  profile: "Profilis",
  newForm: "Nauja anketa",
  inviteTenantUser: "Pakviesti darbuotoją",
  updateTenantUser: "Atnaujinti darbuotoją",
  forms: "Anketos",
  users: "Naudotojai",
  updateProfile: "Atnaujinti profilį",
  tenantUsers: "Įmonės darbuotojai"
};

export const menuLabels = {
  forms: "Anketos",
  profile: "Profilis",
  tenantUsers: "Įmonės darbuotojai",
  myProfile: "MANO PASKYRA"
};
export const buttonsTitles = {
  download: "Atsisiųsti",
  update: "Atnaujinti",
  add: "Pridėti",
  or: "arba",
  forgotPassword: "Pamiršau slaptažodį",
  login: "Prisijungti",
  eLogin: "Prisijungti per el. valdžios vartus",
  fillOutRequest: "Pildyti prašymą",
  newExcerpt: "Naujas prašymas",
  inviteTenantUser: "Pakviesti darbuotoją",
  columns: "Stulpeliai",
  addNew: "+ Pridėti naują",
  newForm: "Nauja teikimo anketa",
  logout: "Atsijungti",
  newUser: "Naujas naudotojas",
  save: "Išsaugoti",
  submit: "Pateikti",
  back: "Grįžti atgal",
  generate: "Generuoti",
  approve: "Tvirtinti",
  return: "Grąžinti taisymui",
  reject: "Atmesti",
  importData: "Įkelti duomenis",
  templateFile: "Šablono failas",
  clearAll: "Išvalyti visus",
  filter: "Filtruoti",
  resetPassword: "Atstatyti slaptažodį",
  createPassword: "Nustatyti slaptažodį",
  eGates: "Prisijungti per el. valdžios vartus",
  edit: "Atnaujinti",
  view: "Peržiūrėti",
  removeTenantUser: "Pašalinti darbuotoją",
  deleteGroup: "Ištrinti grupę",
  sarasas: "Sąrašas",
  zemelapis: "Žemėlapis",
  padalintas: "Padalintas vaizdas",
  newTenant: "Nauja įmonė",
  cancel: "Atšaukti",
  delete: "Ištrinti"
};

export const formLabels = {
  selectProfile: "Pasirinkite paskyrą",
  login: "Prisijungti",
  history: "Istorija",
  tenantUserInfo: "Darbuotojo kontaktinė informacija",
  name: "Pavadinimas",
  description: "Aprašymas",
  gallery: "Galerija",
  profileUpdated: "Profilis atnaujintas",
  mainPhoto: "Pagrindinė nuotrauka",
  map: "Žemėlapis",
  photos: "Nuotraukos",
  profileInfo: "Profilio informacija",
  additionalInfo: "Papildoma informacija",
  contactInfo: "Prašymo teikėjo kontaktinė informacija",
  documents: "Dokumentai"
};
export const inputLabels = {
  generating: "Išrašas kuriamas",
  hydrostaticId: "Hidrostatinio unikalus identifikatorius",
  attribute: "Atributas",
  receiveUnverifiedData: "Gauti nepatikrintus duomenis automatiškai",
  extended: "Noriu gauti išplėstinius objektų duomenis",
  requestDeliveryType: "Išrašo pristatymo būdas",
  dataReceivingPurpose: "Duomenų gavimo tikslas",
  noData: "Nėra duomenų",
  chooseOption: "Pasirinkite",
  comment: "Komentaras",
  or: "arba",
  uploadPhotos: "Įkelti nuotraukas",
  receiveDate: "Nurodykite, kokios dienos situaciją norite gauti",
  pressToWant: "Paspauskite norėdami",
  uploadOrDragFilesHere: "įkelti arba įtempkite failus čia",
  fileTypesAndMaxSize: "PDF, PNG, JPEG, JPG (maks. 20MB)",
  profiles: "PASKYROS",
  length: "Ilgis",
  width: "Plotis",
  measurementUnits: "Matavimo vienetai",
  createdBy: "Duomenis įvedė",
  dataEnteredDate: "Duomenų įvedimo data",
  firstName: "Vardas",
  gallery: "Galerija",
  directives: "Direktyvos",
  lastName: "Pavardė",
  phone: "Telefonas",
  email: "El. pašto adresas",
  legalPersonName: "Juridinio asmens pavadinimas",
  personalCode: "Asmens kodas",
  duties: "Pareigos",
  groupUsers: "Grupės naudotojai",
  getData: "gauti duomenims",
  expirationDate: "Paskyros galiojimo terminas",
  role: "Rolė",
  password: "Slaptažodis",
  rememberMe: "Likti prisijungus",
  newPassword: "Naujas slaptažodis",
  repeatNewPassword: "Pakartokite naują slaptažodį",
  qualificationDocuments:
    "Įkelkite duomenų tikrinimo tikslą ir/ar jūsų kvalifikaciją pagrindžiančius dokumentus",
  quantity: "vnt.",
  noOptions: "Nėra pasirinkimų"
};

export const valueToKVPIcon = {
  k: "min",
  v: "medium",
  p: "max"
};

export const shortNameToFullName = {
  k: "Konfidencialumas",
  v: "Vientisumas",
  p: "Prieinamumas"
};

export const nameColor = {
  0: "gray",
  1: "#E73F76",
  2: "#FF9A3E",
  3: "#FF9A3E",
  4: "#14A166"
};

export const BackgroundColor = {
  0: "gray",
  1: "#E73F761A",
  2: "#FF9A3E1A",
  3: "#FF9A3E1A",
  4: "#14A1661A"
};

export const valueToLineIcon = {
  0: "line0",
  1: "line4",
  2: "line3",
  3: "line2",
  4: "line1"
};

export const valueToLevelIcon = {
  0: "level0",
  1: "level1",
  2: "level2",
  3: "level3",
  4: "level4"
};

export const KVPText = {
  0: "Nenurodytas poveikio lygis",
  1: "Aukštas poveikio lygis",
  2: "Vidutinis poveikio lygis",
  3: "Vidutinis poveikio lygis",
  4: "Žemas poveikio lygis"
};

export const roleLabels = {
  [RolesTypes.ADMIN]: "Administratorius",
  [RolesTypes.USER]: "Naudotojas"
};

export const validationTexts = {
  formFillError: "Neteisingai užpildyta forma",
  requireMap: "Privalote pasirinkti vietą žemėlapyje",
  requirePhotos: "Privalote įkelti nuotrauką",
  requireSpeciesType: "Privalote pasirinkti bent vieną rūšių tipą",
  requireText: "Privalomas laukelis",
  requireSelect: "Privalote pasirinkti",
  badEmailFormat: "Blogas el. pašto adresas",
  badPhoneFormat: "Blogai įvestas telefono numeris",
  tooFrequentRequest: "Nepavyko, per dažna užklausa prašome pabandyti veliau ",
  [ServerErrors.ENTITY_NOT_FOUND]:
    "Blogas elektroninis paštas arba slaptažodis",
  [ServerErrors.USER_NOT_FOUND]: "Naudotojo su tokiu el. paštu nėra",
  passwordsDoNotMatch: "Slaptažodžiai nesutampa",
  error: "Įvyko nenumatyta klaida, prašome pabandyti vėliau",
  validFirstName: "Įveskite taisyklingą vardą",
  validLastName: "Įveskite taisyklingą pavardę",
  badFileTypes: "Blogi failų tipai",
  fileSizesExceeded: "Viršyti failų dydžiai",
  personalCode: "Neteisingas asmens kodo formatas",
  positiveNumber: "Reikšmė turi būti didesnė už nulį",
  requireFiles: "Privalote įkelti dokumentus",
  atLeastOneColumn: "Turi būti pasirinktas bent vienas stulpelis"
};

export const descriptions = {
  getDataAboutPlaces:
    "Norėdami matyti tikslų radaviečių žemėlapį, pateikite prašymą gauti duomenis.",
  getMoreDataAboutPlaces:
    "Norėdami matyti daugiau radaviečių žemėlapyje, pateikite prašymą gauti duomenis.",
  mainDescription:
    "Elektroninių paslaugų sistema teikianti ir gaunanti duomenis bei informaciją apie vandens telkinius.",
  forgotPasswordDescription:
    "Jeigu pamiršote slaptažodį, įrašykite savo el. pašto adresą ir mes padėsime jį atkurti",
  instructionSentDescription:
    "Jūsų nurodytu el. paštu išsiuntėme prisijungimo instrukciją",
  biipDescription: "Biologinės įvairovės informacinė platforma",
  passwordChangedDescription:
    "Jūsų slaptažodis sėkmingai pakeistas. Galite prisijungti prie paskyros",
  passwordCreatedDescription:
    "Jūsų slaptažodis sėkmingai sukurtas. Galite prisijungti prie paskyros",
  resetPasswordDescription:
    "Naujas slaptažodis neturi sutapti su senuoju slaptažodžiu",
  tableNotFound: "Atsiprašome nieko neradome pagal pasirinktus filtrus",
  footerTitle: "© Lietuvos Respublikos aplinkos ministerija, 2013-2022",
  footerDescription:
    "Duomenys apie įmonę kaupiami ir saugomi Juridinių asmenų registre. Įmonės kodas: 188602370 | Adresas: A. Jakšto g. 4, 01105 Vilnius Telefonas: 8 706 63661 | El. paštas: info@am.lt"
};

export const deleteTitles = {
  tenantUser: "Pašalinti darbuotoją"
};

export const deleteDescriptionFirstPart = {
  tenantUser: "Ar esate tikri, kad norite pašalinti ",
  request: "Ar esate tikri, kad norite ištrinti "
};

export const deleteDescriptionSecondPart = {
  tenantUser: " darbuotoją?"
};
export const queryStrings = {
  draw: "?basemap_selector=true&draw_edit_prop=true&draw_geom=[Point]&draw=true&draw_panel=true&autosave=true"
};
