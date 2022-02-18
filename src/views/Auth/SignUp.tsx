import CustomButton from "@/components/CustomButton";
import CustomCheckbox from "@/components/CustomCheckbox";
import CustomInput from "@/components/CustomInput";
import { RegisterRequest } from "@/models/Auth/AuthRequest";
import { paths } from "@/routes/routeConfig";
import { signup } from "@/store/auth";
import { AppDispatch, RootState } from "@/store/redux";
import { isEmail } from "@/utils/validator.utils";
import AppleIcon from "@/_metronic/media/svg/brand-logos/apple-black.svg";
import FacebookIcon from "@/_metronic/media/svg/brand-logos/facebook-4.svg";
import GoogleIcon from "@/_metronic/media/svg/brand-logos/google-icon.svg";
import { Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { Fragment, FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import AuthFooter from "./AuthFooter";

const useStyles = makeStyles<Theme, SignUpProps>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    borderRadius: "0",
    boxShadow: "none",
  },
}));

interface SignUpProps {
  className?: string;
}
const SignUp: FunctionComponent<SignUpProps> = (props: SignUpProps) => {
  const { className } = props;
  const classes = useStyles(props);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation();
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.auth.isLoading
  );

  const { handleSubmit, getValues, formState, control } =
    useForm<RegisterRequest>({
      mode: "onBlur",
      reValidateMode: "onBlur",
      resolver: undefined,
      context: undefined,
      criteriaMode: "firstError",
      shouldFocusError: true,
      defaultValues: {
        email: "",
        password: "",
        password_confirmation: "",
        firstName: "",
        lastName: "",
        phone: "",
        userName: "",
        agreeTerms: false,
      },
    });

  const onSubmit = async () => {
    const body: RegisterRequest = getValues();

    const result = unwrapResult(await dispatch(signup(body)));
    if (result.code === 1) {
      router.push(paths.ConfirmAccount);
    }
  };

  return (
    <Fragment>
      <div className="d-flex flex-column flex-root">
        <div
          className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
          style={{
            backgroundImage: `url("/media/bg/bg-1.jpg")`,
            backgroundPosition: "center",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <a href="/" className="mb-12">
              <img
                alt="Logo"
                src="/media/logos/logo-white.png"
                className="h-40px"
              />
            </a>

            <div className="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              <form className="form w-100" id="kt_sign_up_form">
                <div className="mb-10 text-center">
                  <Typography variant="h2" className="text-dark mb-3">
                    {t("auth:registerTitle")}
                  </Typography>

                  <div className="text-gray-400 fw-bold fs-4">
                    <Typography variant="subtitle2" component="span">
                      {t("auth:alreadyHaveAccount")}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="span"
                      className="link-primary fw-bolder ms-1"
                    >
                      {t("auth:signIn")}
                    </Typography>
                  </div>
                </div>
                <Grid container spacing={1} className="mb-5">
                  <Grid item xs={12} md={4}>
                    <CustomButton
                      id="sign_in_google"
                      height={100}
                      size="sm"
                      className="w-100"
                      onClick={() => {
                        console.log("Execute Function");
                      }}
                      circle={false}
                      isLoading={isLoading}
                      variant={"contained"}
                      color={"light"}
                      startIcon={<img src={GoogleIcon} className="h-20px" />}
                      title={t("common:label.google")}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CustomButton
                      id="sign_in_facebook"
                      height={100}
                      size="sm"
                      className="w-100"
                      onClick={() => {
                        console.log("Execute Function");
                      }}
                      circle={false}
                      isLoading={isLoading}
                      variant={"contained"}
                      color={"light"}
                      startIcon={<img src={FacebookIcon} className="h-20px" />}
                      title={t("common:label.facebook")}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CustomButton
                      id="sign_in_apple"
                      height={100}
                      size="sm"
                      className="w-100"
                      onClick={() => {
                        console.log("Execute Function");
                      }}
                      circle={false}
                      isLoading={isLoading}
                      variant={"contained"}
                      color={"light"}
                      startIcon={<img src={AppleIcon} className="h-20px" />}
                      title={t("common:label.apple")}
                    />
                  </Grid>
                </Grid>

                <div className="d-flex align-items-center mb-10">
                  <div className="border-bottom border-gray-300 mw-50 w-100"></div>
                  <span className="fw-bold text-gray-400 fs-7 mx-2 text__uppercase">
                    {t("common:label.or")}
                  </span>
                  <div className="border-bottom border-gray-300 mw-50 w-100"></div>
                </div>

                <div className="row fv-row mb-7">
                  <div className="col-xl-6">
                    <CustomInput
                      shouldValidate
                      inputTitle={t("auth:lastName")}
                      disabled={false}
                      id={"lastName"}
                      name={"lastName"}
                      control={control}
                      errors={formState.errors}
                    />
                  </div>

                  <div className="col-xl-6">
                    <CustomInput
                      shouldValidate
                      inputTitle={t("auth:firstName")}
                      disabled={false}
                      id={"firstName"}
                      name={"firstName"}
                      control={control}
                      errors={formState.errors}
                    />
                  </div>
                </div>

                <div className="fv-row mb-6">
                  <CustomInput
                    shouldValidate
                    inputTitle={t("auth:username")}
                    rules={{
                      validate: (value: string) =>
                        isEmail(value) || "Username must be email or phone",
                      required: {
                        value: true,
                        message: t("validations:required", {
                          field: t("auth:username"),
                        }),
                      },
                    }}
                    disabled={false}
                    id={"email"}
                    name={"email"}
                    control={control}
                    errors={formState.errors}
                  />
                </div>

                <div className="fv-row mb-6">
                  <div className="position-relative mb-3">
                    <CustomInput
                      shouldValidate
                      inputTitle={t("auth:password")}
                      rules={{
                        required: {
                          value: true,
                          message: t("validations:required", {
                            field: t("auth:password"),
                          }),
                        },
                        minLength: {
                          value: 8,
                          message: t("validations:minLength", {
                            field: t("auth:password"),
                            length: 8,
                          }),
                        },
                        maxLength: {
                          value: 50,
                          message: t("validations:maxLength", {
                            field: t("auth:password"),
                            length: 50,
                          }),
                        },
                      }}
                      disabled={false}
                      type={"password"}
                      id={"Password"}
                      name={"Password"}
                      control={control}
                      errors={formState.errors}
                    />
                  </div>
                </div>

                <div className="fv-row mb-6">
                  <CustomInput
                    shouldValidate
                    inputTitle={t("auth:confirmPassword")}
                    rules={{
                      required: {
                        value: true,
                        message: t("validations:required", {
                          field: t("auth:password"),
                        }),
                      },
                      minLength: {
                        value: 8,
                        message: t("validations:minLength", {
                          field: t("auth:password"),
                          length: 8,
                        }),
                      },
                      maxLength: {
                        value: 50,
                        message: t("validations:maxLength", {
                          field: t("auth:password"),
                          length: 50,
                        }),
                      },
                      validate: (value: string) =>
                        value === getValues("password") ||
                        "Password do not match",
                    }}
                    disabled={false}
                    type={"password"}
                    id={"password_confirm"}
                    name={"password_confirm"}
                    control={control}
                    errors={formState.errors}
                  />
                </div>

                <div className="fv-row mb-10">
                  <CustomCheckbox
                    variant="solid"
                    color="primary"
                    size="sm"
                    control={control}
                    name="agreeTerms"
                    rules={{
                      validate: (value: boolean) =>
                        value || "You must accept the terms and conditions",
                    }}
                    checkboxTitle={
                      <span className="form-check-label fw-bold text-gray-700 fs-6">
                        {t("common:label.agree")}
                        <a href="#" className="ms-1 link-primary">
                          {t("common:label.termsAndConditions")}
                        </a>
                      </span>
                    }
                    errors={formState.errors}
                  />
                </div>

                <div className="text-center">
                  <CustomButton
                    id="somebutton"
                    height={100}
                    size="md"
                    className="w-100"
                    onClick={() => {
                      console.log("Execute Function");
                    }}
                    circle={false}
                    isLoading={isLoading}
                    variant={"contained"}
                    color={"primary"}
                    title={t("common:button.continue")}
                  />
                </div>
              </form>
            </div>
          </div>

          <AuthFooter />
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
