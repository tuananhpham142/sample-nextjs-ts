import { Color } from "@/models/interfaces/theme";
import { formatNumber } from "@/utils/number.utils";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles<Theme, RatingOverviewProps>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    borderRadius: "0",
    boxShadow: "none",
  },
}));

interface RatingOverviewProps {
  className?: string;
  rating: number;
  totalReview: number;
  color?: Color;
  shape: "square" | "rounded" | "circle";
}
const RatingOverview: FunctionComponent<RatingOverviewProps> = (
  props: RatingOverviewProps
) => {
  const { className, rating, totalReview, color, shape } = props;
  const classes = useStyles(props);
  const { t } = useTranslation();
  return (
    <Fragment>
      <div
        className={clsx(
          "d-flex align-items-sm-center bg-light-white bg-hover-white shadow-xs p-4 my-4",
          className,
          {
            ["rounded-16"]: shape === "rounded",
            [classes.circle]: shape === "circle",
            ["rounded-0"]: shape === "square",
          }
        )}
      >
        <div className="symbol symbol-60px me-4 bg-transparent">
          <Typography variant="h1">{rating}</Typography>
        </div>

        <div className="d-flex flex-row-fluid flex-wrap align-items-center text-hover-primary">
          <div className="flex-grow-1 text-hover-primary">
            <Typography
              variant="subtitle1"
              className={clsx(
                "fw-bolder text-hover-primary hoverable",
                classes.title
              )}
            >
              {t("review:label.common.totalReviews", {
                totalReview: formatNumber(totalReview, true, 25000),
              })}
            </Typography>
            <CustomRating
              size={"8"}
              color={"warning"}
              rating={rating}
              readOnly
            />
          </div>
          <CustomButton
            id="somebutton"
            // height={100}
            size="sm"
            onClick={() => {
              console.log("Execute Function");
            }}
            circle
            isLoading={false}
            variant={"contained"}
            color={"warning"}
            title={t("review:button.createReview")}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default RatingOverview;
