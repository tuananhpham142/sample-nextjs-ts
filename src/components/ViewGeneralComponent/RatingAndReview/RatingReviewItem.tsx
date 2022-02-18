import { formatNumber } from "@/utils/number.utils";
import { Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Fragment, FunctionComponent } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles<Theme, RatingReviewItemProps>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    borderRadius: "0",
    boxShadow: "none",
  },
}));

interface RatingReviewItemProps {
  className?: string;
  data: Array<{
    id: string;
    name: string;
    rating: number;
    totalReview: number;
  }>;
}
const RatingReviewItem: FunctionComponent<RatingReviewItemProps> = (
  props: RatingReviewItemProps
) => {
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
          checkboxTitle={
            <Grid container className="mx-4">
              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  className="me-4 text-hover-primary hoverable"
                >
                  {formatNumber(item.totalReview, true, 20000)} reviews
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <CustomRating
                  size={"8"}
                  color={"warning"}
                  rating={item.rating}
                  readOnly
                />
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  component="div"
                  className="text-hover-primary hoverable"
                >
                  {item.name}
                </Typography>
              </Grid>
            </Grid>
          }
          errors={formState.errors}
          className="mb-4"
        />
      ))}
    </Fragment>
  );
};

export default RatingReviewItem;
