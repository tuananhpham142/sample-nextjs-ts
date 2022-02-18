import CustomAsyncSelect from "@/components/CustomAsyncSelect";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import debounce from "lodash/debounce";
import { Fragment, FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles<Theme, DestinationFilterProps>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    borderRadius: "0",
    boxShadow: "none",
  },
}));

interface DestinationFilterProps {
  className?: string;
}
const DestinationFilter: FunctionComponent<DestinationFilterProps> = (
  props: DestinationFilterProps
) => {
  const { className } = props;
  const classes = useStyles(props);

  useEffect(() => {}, []);
  const { formState, handleSubmit, reset, setValue, getValues, control } =
    useForm<{ keyword: string }>({
      mode: "onBlur",
      reValidateMode: "onBlur",
      resolver: undefined,
      context: undefined,
      criteriaMode: "firstError",
      shouldFocusError: true,
      defaultValues: {
        keyword: "",
      },
    });

  const renderOption = (option: any) => {};

  const handleSuggestion = () => {};

  return (
    <Fragment>
      <CustomAsyncSelect
        placeholder="Search everything..."
        className="form-control form-control-solid"
        control={control}
        disabled={false}
        id="keyword"
        name="keyword"
        errors={formState.errors}
        renderOption={(option: any) => renderOption(option)}
        onLoadOptions={debounce(handleSuggestion, 1000)}
      />
    </Fragment>
  );
};

export default DestinationFilter;
