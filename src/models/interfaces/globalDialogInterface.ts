export type GlobalDialogFormDataType = any; // LoginForm | RegisterForm | ForgotPasswordForm | AccountConfirmForm | SearchForm
export type GlobalDialogInfoDataType = any; // DialogReportInterface | DialogSettingInterface

export type GlobalDialogInitialDataType = {
  auth: any;
  search: any;
};

export type FormTypeWithData = "auth" | "place";
export type FormTypeWithChildren = "confirmActions";
export type InfoType = "report" | "settings";
