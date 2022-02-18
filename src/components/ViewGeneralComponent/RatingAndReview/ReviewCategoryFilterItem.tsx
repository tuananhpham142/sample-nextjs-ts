import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Fragment, FunctionComponent } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles<Theme, ReviewCategoryFilterItemProps>(
  (theme: Theme) => ({
    root: {
      marginTop: theme.spacing(3),
      borderRadius: "0",
      boxShadow: "none",
    },
  })
);

interface ReviewCategoryFilterItemProps {
  className?: string;
  data: Array<{ id: string; name: string }>;
}
const ReviewCategoryFilterItem: FunctionComponent<
  ReviewCategoryFilterItemProps
> = (props: ReviewCategoryFilterItemProps) => {
  const { className, data } = props;
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
  } = useForm<{
    selectedItems: Array<{ id: string; name: string; isChecked: boolean }>;
  }>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    defaultValues: {
      selectedItems: [],
    },
  });

  return (
    <Fragment>
      {data.map((item, index) => (
        <CustomCheckbox
          key={index}
          variant="solid"
          color="primary"
          size="sm"
          control={control}
          name={`selectedItems[${index}].isChecked`}
          checkboxTitle={item.name}
          errors={formState.errors}
          className="mb-4"
        />
      ))}
    </Fragment>
  );
};

export default ReviewCategoryFilterItem;
