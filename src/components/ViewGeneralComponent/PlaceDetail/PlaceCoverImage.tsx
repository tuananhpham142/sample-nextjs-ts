import { CustomClasses } from "@/models/interfaces/globalInterface";
import { ComponentBackgroundVariant } from "@/models/interfaces/theme";
import { PlaceDetailItem } from "@/models/Places/PlaceResponse";
import { trimmedTextByCharacters } from "@/utils/string.utils";
import {
  isContainJsInjection,
  isContainSqlInjection,
} from "@/utils/validator.utils";
import { Hidden, InputAdornment, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { CSSProperties, Fragment, FunctionComponent, useMemo } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles<Theme, PlaceCoverImageProps>((theme: Theme) => ({
  imgSize: {
    maxHeight: "100%",
    width: "100%",
    backgroundSize: "cover",
    cursor: "pointer",
    overflow: "hidden",
    [theme.breakpoints.up("lg")]: {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
  },
  imgGradientLeftBottom: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: (props) => props.imgHeight || 190,
    },
    [theme.breakpoints.down("sm")]: {
      height: (props) => props.imgHeight || 370,
    },
    MozTransition: "all 0.5s",
    WebkitTransition: "all 0.5s",
    transition: "all 0.5s",
    cursor: "pointer",
    "&:after": {
      transition: theme!.transitions!.create!(["all"], {
        duration: 200,
        easing: "ease-in-out",
      }),
      display: "block",
      position: "absolute",
      bottom: 0,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0) 20.44%, #FFFFFF 100%)",
      // backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 20.44%, #FFFFFF 100%)',
      content: `''`,
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
  },
  imgGradientToTop: {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 20.44%, #FFFFFF 100%)",
    position: "absolute",
    left: 0,
    right: 0,
    [theme.breakpoints.up("lg")]: {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
  },
  boxTitle: {
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  subTitle: {
    color: "#717981 !important",
  },
}));
type IndexMainCardClasses =
  | "image"
  | "title"
  | "boxTitle"
  | "maskBackground"
  | "subTitle";

interface PlaceCoverImageProps extends CustomClasses<IndexMainCardClasses> {
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgClass?: string;
  imgHeight?: number;
  title: string;
  placeName: string;
  totalSaved?: number;
  subTitle?: string;
  onSearch?: (data?: string | PlaceDetailItem) => void;
  hideSearchInput?: boolean;
  hideSaveButton?: boolean;
  hideSettingButton?: boolean;
  backgroundGradientColor?: ComponentBackgroundVariant;
}
const PlaceCoverImage: FunctionComponent<PlaceCoverImageProps> = (
  props: PlaceCoverImageProps
) => {
  const {
    className,
    title,
    placeName,
    subTitle,
    totalSaved,
    customClasses,
    imgAlt,
    imgSrc,
    imgClass,
    imgHeight,
  } = props;
  const classes = useStyles(props);
  const {
    register,
    formState,
    handleSubmit,
    watch,
    setValue,
    getValues,
    clearErrors,
    unregister,
    control,
  } = useForm<{ searchText: string }>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    defaultValues: {
      searchText: "",
    },
  });
  const imgStyle = useMemo<CSSProperties>(
    () => ({
      maxHeight: imgHeight,
      height: imgHeight ? imgHeight : undefined,
      backgroundImage: `url("${imgSrc}")`,
      objectFit: "cover",
    }),
    [imgHeight]
  );

  const replaceSubtitleText = (text: string, replaceText: number = 0) => {
    let htmlText = trimmedTextByCharacters(text, 120).replace(
      "{{totalSaved}}",
      `<strong class="text-hover-primary hoverable fw-boldest">${replaceText}</strong>`
    );
    if (isContainSqlInjection(htmlText) || isContainJsInjection(htmlText)) {
      return text;
    }
    return htmlText;
  };
  const replaceTitleText = (text: string, replaceText: string) => {
    let htmlText = trimmedTextByCharacters(text, 120).replace(
      "{{placeName}}",
      `<strong class="text-warning hoverable fw-boldest">${replaceText}</strong>`
    );
    if (isContainSqlInjection(htmlText) || isContainJsInjection(htmlText)) {
      return text;
    }
    return htmlText;
  };
  return (
    <Fragment>
      <div
        className={clsx(
          classes.imgGradientLeftBottom,
          classes.imgGradientToTop,
          `rounded-0`
        )}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          style={imgStyle}
          className={clsx(classes.imgSize, imgClass)}
        />
        <div
          className={clsx(
            "d-flex flex-stack flex-wrap flex-md-nowrap align-items-center rounded p-5 mb-7 p-6 mb-6 w-100",
            classes.boxTitle,
            customClasses?.boxTitle
          )}
        >
          <div className="me-2">
            <Typography
              variant="h1"
              className={clsx(
                "fs-4x mb-2",
                classes.title,
                customClasses?.title
              )}
              dangerouslySetInnerHTML={{
                __html: replaceTitleText(title, placeName),
              }}
            ></Typography>
            {subTitle && (
              <Typography
                variant="body1"
                className={clsx(classes.subTitle, customClasses?.subTitle)}
                dangerouslySetInnerHTML={{
                  __html: replaceSubtitleText(subTitle, totalSaved),
                }}
              ></Typography>
            )}
            <Hidden smDown>
              <CustomFreeStyleInput
                className={clsx(
                  "bg-white mw-250px text-warnning min-h-45px mt-4"
                )}
                disabled={false}
                autoHeight
                circle
                id={`searchText`}
                name={`searchText`}
                placeholder="Tìm kiếm tại Đà Lạt"
                startAdornment={
                  <InputAdornment position="start">
                    <span className="flaticon-search text-warning opacity-50"></span>
                  </InputAdornment>
                }
                control={control}
              />
            </Hidden>
          </div>
          <Hidden mdUp>
            <CustomIconStandalone
              size="2"
              buttonSize="md"
              type="button"
              icon="flaticon-settings-1"
              onClick={() => {
                return;
              }}
              variant={"contained"}
              circle
              color="warning"
            />
          </Hidden>

          <Hidden smDown>
            <div
              className={clsx(
                "card-rounded bg-transparent d-flex flex-stack flex-wrap mt-6"
              )}
            >
              <div className="d-flex align-items-center justify-content-center">
                <CustomButton
                  id="somebutton"
                  height={100}
                  size="md"
                  circle
                  onClick={() => {
                    console.log("Execute Function");
                  }}
                  startIcon={<i className="flaticon2-plus" />}
                  isLoading={false}
                  variant={"contained"}
                  color={"warning"}
                  title={"Quan tâm"}
                />
                <CustomIconStandalone
                  size="2"
                  buttonSize="md"
                  type="button"
                  icon="flaticon-settings-1"
                  onClick={() => {
                    return;
                  }}
                  variant={"outline"}
                  circle
                  color="warning"
                  className="ms-4"
                />
              </div>
            </div>
          </Hidden>
        </div>
      </div>
    </Fragment>
  );
};

PlaceCoverImage.defaultProps = {
  customClasses: {},
};

export default PlaceCoverImage;
