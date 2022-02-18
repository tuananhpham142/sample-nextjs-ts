import { TEXT_SECONDARY_COLOR } from "@/styles/colorPalette";
import selectStyles from "@/styles/selectStyles";
import { Skeleton } from "@mui/lab";
import {
  FormHelperText,
  InputBaseProps,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React, { Fragment, FunctionComponent, ReactNode } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  get,
  RegisterOptions,
} from "react-hook-form";
import AsyncSelect from "react-select/async";

const useStyles = makeStyles<Theme, CustomAsyncSelect>((theme: Theme) => ({
  helperText: {
    color: "#BE4040",
    marginTop: theme.spacing(1),
  },
  sectionTitleMargin: {
    marginBottom: theme.spacing(1),
  },
}));

interface CustomAsyncSelect extends InputBaseProps {
  className?: string;
  name: string;
  placeholder?: string;
  inputTitle?: string | ReactNode;
  inputSubtitle?: string | ReactNode;
  errors: FieldErrors;
  control: Control<any>;
  isLoading?: boolean;
  disabled?: boolean;
  isMulti?: boolean;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  onInputChange?: () => void;
  onLoadOptions?: (inputValue: string, callback: Function) => void;
  renderOption?: (option: any) => void;
}

const MultiValueLabel = (props: any) => {
  return (
    <Typography
      variant="body1"
      className="px-4 d-flex align-items-center text-dark"
    >
      {props.data.label}
    </Typography>
  );
};

const SingleValue = (props: any) => {
  return (
    <Typography
      variant="body1"
      className="px-4 d-flex align-items-center text-dark"
    >
      {props.data.label}
    </Typography>
  );
};

const CustomAsyncSelect: FunctionComponent<CustomAsyncSelect> = (
  props: CustomAsyncSelect
) => {
  const {
    name,
    placeholder,
    inputTitle,
    inputSubtitle,
    errors,
    control,
    isLoading,
    rules,
    disabled,
    isMulti,
    onInputChange,
    onLoadOptions,
    renderOption,
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
              <AsyncSelect
                onChange={field.onChange}
                cacheOptions
                defaultOptions
                loadOptions={onLoadOptions}
                onInputChange={onInputChange}
                placeholder={placeholder}
                //@ts-ignore
                styles={selectStyles}
                className="basic-single"
                classNamePrefix="select"
                isMulti={isMulti}
                closeMenuOnSelect={!isMulti}
                components={{ MultiValueLabel, SingleValue }}
                //@ts-ignore
                formatOptionLabel={(option: any) => {
                  return (
                    <>
                      {renderOption ? (
                        renderOption(option)
                      ) : (
                        <Typography variant="body1">{option.name}</Typography>
                      )}
                    </>
                  );
                }}
                isDisabled={disabled}
                isClearable={false}
                menuShouldScrollIntoView
              />
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

export default CustomAsyncSelect;
