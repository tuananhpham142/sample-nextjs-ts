import { Grid, Hidden, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import ListItemSlider from "../ListItemSlider";
import TitleWithAction from "../TitleWithAction";
import RatingReviewItem from "./RatingReviewItem";
import ReviewCategoryFilterItem from "./ReviewCategoryFilterItem";
import ReviewItem from "./ReviewItem";

const useStyles = makeStyles<Theme, RatingAndReviewProps>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    borderRadius: "0",
    boxShadow: "none",
  },
}));

interface RatingAndReviewProps {
  className?: string;
}
const RatingAndReview: FunctionComponent<RatingAndReviewProps> = (
  props: RatingAndReviewProps
) => {
  const { className } = props;
  const classes = useStyles(props);
  const { t } = useTranslation();
  const renderItem = () => {
    return (
      <ReviewItem
        className="mx-2"
        date={"2020/02/01"}
        like={17}
        user={{
          name: "Phạm Tuấn Anh",
          username: "@di.khap.ha.noi",
          id: "xcvxcvxc-234asd-29s2-s",
          avatar: "https://source.unsplash.com/random",
          cover: "https://source.unsplash.com/random",
        }}
        content={
          "Before you do any of the following steps, be sure to pick a topic that actually interests you. Nothing – and I mean NOTHING– will kill a blog post more effectively than a lack of enthusiasm from the writer. You can tell when a writer is bored by their subject, and it’s so cringe-worthy it’s a little embarrassing."
        }
      />
    );
  };

  return (
    <Fragment>
      <Hidden mdDown>
        <Grid container>
          <Grid item xs={12}>
            <TitleWithAction
              containerClass="mb-4"
              title={t("review:label.common.label")}
              action={
                <CustomButton
                  id="somebutton"
                  height={100}
                  size="sm"
                  circle
                  onClick={() => {
                    console.log("Execute Function");
                  }}
                  variant={"contained"}
                  color={"warning"}
                  title={t("review:button.createReview")}
                />
              }
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="h6" className="mb-4">
              {t("review:label.common.label")}
            </Typography>
            <RatingReviewItem
              data={[
                {
                  id: "1",
                  name: t("review:label.rating.ratingWorst"),

                  totalReview: 2,
                  rating: 5,
                },
                {
                  id: "1",
                  name: t("review:label.rating.ratingWorse"),
                  totalReview: 24,
                  rating: 4,
                },
                {
                  id: "1",
                  name: t("review:label.rating.ratingNormal"),
                  totalReview: 11228,
                  rating: 3,
                },
                {
                  id: "1",
                  name: t("review:label.rating.ratingGood"),
                  totalReview: 1420,
                  rating: 2,
                },
                {
                  id: "1",
                  name: t("review:label.rating.ratingBest"),
                  totalReview: 128,
                  rating: 1,
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Typography variant="h6" className="mb-4">
              {t("review:label.common.travelType")}
            </Typography>
            <ReviewCategoryFilterItem
              data={[
                {
                  id: "1",
                  name: "Du lịch gia đình",
                },
                {
                  id: "1",
                  name: "Du lịch gia đình",
                },
                {
                  id: "1",
                  name: "Du lịch gia đình",
                },
                {
                  id: "1",
                  name: "Du lịch gia đình",
                },
                {
                  id: "1",
                  name: "Du lịch gia đình",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={5}>
            <Typography variant="h6" className="mb-4">
              {t("review:label.common.signatureReview")}
            </Typography>
            <ListItemSlider
              data={[1, 2, 3, 4, 5, 6]}
              render={renderItem}
              freeMode={false}
              spaceBetween={8}
              slidesPerViewResponsive={{
                xs: 1.2,
                sm: 1.2,
                md: 1.2,
                lg: 1.2,
                xl: 1.2,
                xxl: 1.2,
              }}
            />
          </Grid>
        </Grid>
      </Hidden>
    </Fragment>
  );
};

export default RatingAndReview;
