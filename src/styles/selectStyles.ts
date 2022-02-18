import {
  BACKGROUND_BLUR,
  BACKGROUND_WHITE,
  TEXT_BLUR_COLOR,
  TEXT_PRIMARY_COLOR,
  THEME_COLOR_PRIMARY_LIGHT,
} from "@/styles/colorPalette";
import { FONT_FAMILY, SHADOW_DEFAULT } from "@/styles/global";
import { TEXT_PLACEHOLDER_COLOR } from "./colorPalette";
import { SIZE_TEXT_BODY_1, SIZE_TEXT_BODY_2 } from "./global";

const selectStyles = {
  container: (styles: any, state: any) => {
    const background = state.isDisabled ? BACKGROUND_BLUR : BACKGROUND_BLUR;
    return {
      background,
      borderRadius: 8,
      position: "relative",
    };
  },
  singleValue: (styles: any, state: any) => {
    return {
      fontSize: SIZE_TEXT_BODY_1,
      fontWeight: 400,
      color: TEXT_PRIMARY_COLOR,
      fontFamily: FONT_FAMILY,
    };
  },
  valueContainer: (styles: any) => ({
    marginLeft: 16,
    marginRight: 16,
    height: 48,
    borderRadius: 8,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  }),
  menu: (provided: any, styles: any) => ({
    position: "absolute",
    background: BACKGROUND_WHITE,
    width: "100%",
    zIndex: 10,
    marginTop: 8,
    boxShadow: SHADOW_DEFAULT,
    // border: '1px solid rgba(0, 0, 0, 0.23)',
    justifyContent: "center",
    borderRadius: 8,
  }),
  option: (styles: any) => ({
    padding: "4px 12px 4px 12px",
    width: "100%",
    fontSize: SIZE_TEXT_BODY_2,
    fontWeight: 400,
    color: TEXT_PRIMARY_COLOR,
    fontFamily: FONT_FAMILY,
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: THEME_COLOR_PRIMARY_LIGHT,
    },
  }),
  control: (styles: any, state: any) => {
    // const border = state.isDisabled
    //     ? `1px solid ${TEXT_BLUR_COLOR} !important`
    //     : `1px solid ${THEME_COLOR_PRIMARY_LIGHT}`;
    const color = state.isDisabled ?? `${TEXT_BLUR_COLOR} !important`;

    return {
      borderRadius: 8,
      // border,
      color,
    };
  },
  placeholder: (styles: any, state: any) => {
    const color = state.isDisabled
      ? `${TEXT_BLUR_COLOR} !important`
      : TEXT_PLACEHOLDER_COLOR;
    return {
      ...styles,
      position: "absolute",
      left: 16,
      color,
    };
  },
  indicatorsContainer: (styles: any) => ({
    display: "none",
  }),
  multiValue: (styles: any) => {
    // const color = [THEME_COLOR_SUCCESS_LIGHT, THEME_COLOR_INFO_LIGHT, THEME_COLOR_DANGER_LIGHT, THEME_COLOR_WARNING_LIGHT];
    return {
      ...styles,
      borderRadius: 4,
      padding: 4,
      background: THEME_COLOR_PRIMARY_LIGHT,
    };
  },
  multiValueLabel: (styles: any) => ({
    ...styles,
    fontSize: SIZE_TEXT_BODY_1,
    color: TEXT_PRIMARY_COLOR,
  }),
};

export default selectStyles;
