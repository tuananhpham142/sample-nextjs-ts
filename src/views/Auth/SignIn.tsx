import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { LoginRequest } from "@/models/Auth/AuthRequest";
import { AppDispatch, RootState } from "@/store/redux";
import { isEmail } from "@/utils/validator.utils";
import AppleIcon from "@/_metronic/media/svg/brand-logos/apple-black.svg";
import FacebookIcon from "@/_metronic/media/svg/brand-logos/facebook-4.svg";
import GoogleIcon from "@/_metronic/media/svg/brand-logos/google-icon.svg";
import { InputAdornment, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import AuthFooter from "./AuthFooter";
interface SignInProps {}
const SignIn: FunctionComponent<SignInProps> = (props: SignInProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();

  const isLoading = useSelector<RootState, boolean>(
    (state) => state.auth.isLoading
  );

  const { handleSubmit, getValues, formState, control, setFocus } =
    useForm<LoginRequest>({
      mode: "onBlur",
      reValidateMode: "onBlur",
      resolver: undefined,
      context: undefined,
      criteriaMode: "firstError",
      shouldFocusError: true,
      // shouldUnregister: true,
      defaultValues: {
        email: "",
        password: "",
      },
    });

  const onSubmit = async () => {};

  // useEffect(() => {
  //     if (formState.errors) {
  //         const firstError: keyof LoginRequestInterface = reduce(Object.keys(formState.errors), (field, a) => {
  //             return !!get(formState.errors, field) ? field : a;
  //         });

  //         if (firstError) {
  //             setFocus(firstError);
  //         }
  //     }
  // }, [formState.errors, setFocus]);

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

            <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              <form className="form w-100" id="kt_sign_in_form" action="#">
                <div className="text-center mb-10">
                  <Typography variant="h2" className="text-dark mb-3">
                    {t("auth:loginTitle")} {t("common:app.name")}
                  </Typography>

                  <div className="text-gray-400 fw-bold fs-4">
                    <Typography variant="subtitle2" component="span">
                      {t("auth:newUser")}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="span"
                      className="link-primary fw-bolder ms-1"
                    >
                      {t("auth:createNewAccount")}
                    </Typography>
                  </div>
                </div>
                {/* BEGIN::Login form */}
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
                        value: 6,
                        message: t("validations:minLength", {
                          field: t("auth:password"),
                          length: 6,
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
                    endAdornment={
                      <InputAdornment className="hoverable" position="end">
                        <i className="flaticon-visible fs-2" />
                      </InputAdornment>
                    }
                    disabled={false}
                    type={"password"}
                    id={"password"}
                    name={"password"}
                    control={control}
                    errors={formState.errors}
                  />
                  <div className="d-flex mt-2 justify-content-end">
                    <Typography
                      variant="h6"
                      className="link-primary fs-6 fw-bolder"
                    >
                      {t("auth:forgotPassword")}
                    </Typography>
                  </div>
                </div>
                {/* END::Login form */}

                <div className="text-center">
                  <CustomButton
                    id="sign_in_submit"
                    height={100}
                    size="md"
                    className="mb-5 w-100"
                    onClick={() => {
                      console.log("Execute Function");
                    }}
                    circle={false}
                    isLoading={isLoading}
                    variant={"contained"}
                    color={"primary"}
                    title={t("common:button.continue")}
                  />

                  <div className="text-center text-muted text-uppercase fw-bolder mb-5">
                    {t("common:label.or")}
                  </div>

                  {/* BEGIN::Social Login */}
                  <CustomButton
                    id="sign_in_google"
                    height={100}
                    size="md"
                    className="w-100 mb-5"
                    onClick={() => {
                      console.log("Execute Function");
                    }}
                    circle={false}
                    isLoading={isLoading}
                    variant={"contained"}
                    color={"light"}
                    startIcon={<img src={GoogleIcon} className="h-20px" />}
                    title={t("common:label.continueWithLabel", {
                      label: t("common:label.google"),
                    })}
                  />
                  <CustomButton
                    id="sign_in_facebook"
                    height={100}
                    size="md"
                    className="w-100 mb-5"
                    onClick={() => {
                      console.log("Execute Function");
                    }}
                    circle={false}
                    isLoading={isLoading}
                    variant={"contained"}
                    color={"light"}
                    startIcon={<img src={FacebookIcon} className="h-20px" />}
                    title={t("common:label.continueWithLabel", {
                      label: t("common:label.facebook"),
                    })}
                  />
                  <CustomButton
                    id="sign_in_apple"
                    height={100}
                    size="md"
                    className="w-100 mb-5"
                    onClick={() => {
                      console.log("Execute Function");
                    }}
                    circle={false}
                    isLoading={isLoading}
                    variant={"contained"}
                    color={"light"}
                    startIcon={<img src={AppleIcon} className="h-20px" />}
                    title={t("common:label.continueWithLabel", {
                      label: t("common:label.apple"),
                    })}
                  />
                  {/* END::Social Login */}
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

export default SignIn;
