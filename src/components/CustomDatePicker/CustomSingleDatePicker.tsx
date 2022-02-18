import { BORDER_RADIUS_DEFAULT } from "@/styles/border";
import {
  COLOR_INPUT_ERROR,
  TEXT_BLUR_COLOR,
  TEXT_SECONDARY_COLOR,
} from "@/styles/colorPalette";
import { YEAR_RANGE_PICKER } from "@/utils/dateTime.utils";
import Skeleton from "@mui/lab/Skeleton";
import {
  FormHelperText,
  Grid,
  InputBaseProps,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import moment, { Moment } from "moment";
import { Fragment, FunctionComponent, ReactNode } from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import {
  Control,
  Controller,
  FieldErrors,
  get,
  RegisterOptions,
} from "react-hook-form";
import CustomIconStandalone from "../CustomIconStandalone";
// import "./Airbnb/CustomSingleDatePicker.module.scss";

const useStyles = makeStyles<Theme, CustomSingleDatePickerProps>(
  (theme: Theme) => ({
    ".SingleDatePicker": {
      background: "red !important",
    },
    hasError: {
      // border: `1px solid ${COLOR_INPUT_ERROR} !important`,
      background: `${COLOR_INPUT_ERROR} !important`,
      borderRadius: BORDER_RADIUS_DEFAULT,
    },
    success: {
      borderRadius: BORDER_RADIUS_DEFAULT,
      // border: `1px solid ${THEME_COLOR_SUCCESS} !important`,
    },
    helperText: {
      color: "#BE4040",
      marginTop: theme.spacing(1),
    },
    sectionTitleMargin: {
      marginBottom: theme.spacing(1),
    },
    inputTitle: {
      marginBottom: theme.spacing(1),
    },
    disabled: {
      border: `1px solid ${TEXT_BLUR_COLOR} !important`,
      color: `${TEXT_BLUR_COLOR} !important`,
      "&:hover": {
        borderColor: `${TEXT_BLUR_COLOR} !important`,
      },
      fontStyle: "italic !important",
      cursor: "not-allowed !important",
      borderRadius: BORDER_RADIUS_DEFAULT,
    },
    test: {
      "&::MsExpand": {
        display: "none",
      },
    },
    inputSubtitle: {},
  })
);

interface CustomSingleDatePickerProps extends InputBaseProps {
  className?: string;
  name: string;
  inputTitle?: string | ReactNode;
  inputSubtitle?: string | ReactNode;
  errors: FieldErrors;
  control: Control<any>;
  isLoading?: boolean;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  date: Moment;
  focused: boolean;
  onFocusChange: () => void;
  disabled?: boolean;
  openDirection?: "up" | "down";
}

const CustomSingleDatePicker: FunctionComponent<CustomSingleDatePickerProps> = (
  props: CustomSingleDatePickerProps
) => {
  const {
    name,
    className,
    inputTitle,
    inputSubtitle,
    errors,
    control,
    isLoading,
    rules,
    date,
    focused,
    disabled,
    openDirection,
    onFocusChange,
  } = props;

  const classes = useStyles(props);

  return (
    <Fragment>
      {inputTitle && (
        <div className={classes.sectionTitleMargin}>
          <Typography
            variant="h6"
            className={clsx({
              [classes.titleMargin]: Boolean(inputSubtitle),
              "text-muted": disabled,
            })}
          >
            {inputTitle}
          </Typography>
          <Typography
            variant="caption"
            className={clsx({
              "text-muted": disabled,
            })}
          >
            {inputSubtitle}
          </Typography>
        </div>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => {
          if (isLoading) {
            return (
              <Skeleton
                width={"100%"}
                style={{
                  flex: 1,
                  fontSize: 15,
                  color: TEXT_SECONDARY_COLOR,
                  width: "100%",
                  height: 58,
                  borderRadius: 8,
                }}
              />
            );
          } else {
            return (
              <div
                className={clsx({
                  [`${className}`]: true,
                  [classes.hasError]: get(errors, name) && !disabled,
                  [classes.success]: !Boolean(get(errors, name)) && !disabled,
                  [classes.disabled]: disabled,
                })}
              >
                <SingleDatePicker
                  {...{
                    ...field,
                  }}
                  numberOfMonths={1}
                  daySize={48}
                  renderMonthElement={({
                    month,
                    onMonthSelect,
                    onYearSelect,
                  }) => (
                    <Grid
                      container
                      justifyContent={"center"}
                      spacing={2}
                      alignItems="center"
                    >
                      <Grid item>
                        <select
                          className={
                            "text-primary text-hover-primary fw-bold form-control form-control-solid"
                          }
                          value={month.month()}
                          onChange={(e) => {
                            onMonthSelect(month, e.target.value);
                          }}
                        >
                          {moment.months().map((label, value) => (
                            <option value={value}>{label}</option>
                          ))}
                        </select>
                      </Grid>
                      <Grid item>
                        <select
                          className={
                            "text-primary text-hover-primary fw-bold form-control form-control-solid"
                          }
                          value={month.year()}
                          onChange={(e) => {
                            onYearSelect(month, e.target.value);
                          }}
                        >
                          {YEAR_RANGE_PICKER().map((e: number) => (
                            <option value={e}>{e}</option>
                          ))}
                        </select>
                      </Grid>
                    </Grid>
                  )}
                  navNext={
                    <div
                      style={{
                        right: "22px",
                        position: "absolute",
                        top: "22px",
                      }}
                    >
                      <CustomIconStandalone
                        size={"2x"}
                        className="text-primary text-hover-primary"
                        icon="flaticon2-next"
                      />
                    </div>
                  }
                  navPrev={
                    <div
                      style={{
                        left: "22px",
                        position: "absolute",
                        top: "22px",
                      }}
                    >
                      <CustomIconStandalone
                        size={"2x"}
                        className="text-primary text-hover-primary"
                        icon="flaticon2-back"
                      />
                    </div>
                  }
                  noBorder
                  isOutsideRange={(day: Moment) => false}
                  openDirection={openDirection}
                  disabled={disabled}
                  date={date}
                  transitionDuration={200}
                  onDateChange={field.onChange}
                  focused={focused}
                  onFocusChange={onFocusChange}
                  displayFormat="dddd, DD/MM/YYYY"
                  hideKeyboardShortcutsPanel
                  readOnly
                  id="your_unique_id"
                />
              </div>
            );
          }
        }}
      />
      {get(errors, name) && (
        <FormHelperText id="my-helper-text" className={classes.helperText}>
          {get(errors, name).message}
        </FormHelperText>
      )}
    </Fragment>
  );
};
CustomSingleDatePicker.defaultProps = {
  openDirection: "down",
};

export default CustomSingleDatePicker;
