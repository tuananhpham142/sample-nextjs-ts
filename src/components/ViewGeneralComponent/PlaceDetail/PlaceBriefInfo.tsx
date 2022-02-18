import { CustomClasses } from "@/models/interfaces/globalInterface";
import { formatCurrency } from "@/utils/currency.utils";
import { formatNumber } from "@/utils/number.utils";
import { Hidden, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles<Theme, PlaceBriefInfoProps>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    borderRadius: "0",
    boxShadow: "none",
  },
}));

interface PlaceBriefInfoProps
  extends CustomClasses<"title" | "boxTitle" | "subTitle"> {
  className?: string;
  title: string;
  totalPost: number;
  rating: number;
  hideSaveButton?: boolean;
  hideSettingButton?: boolean;
  address: string;
  openTime: string;
  phone: string;
  website: string;
  minPrice: number;
  maxPrice: number;
  category: string;
}
const PlaceBriefInfo: FunctionComponent<PlaceBriefInfoProps> = (
  props: PlaceBriefInfoProps
) => {
  const {
    className,
    customClasses,
    title,
    totalPost,
    rating,
    address,
    openTime,
    phone,
    website,
    minPrice,
    maxPrice,
    category,
    hideSaveButton,
    hideSettingButton,
  } = props;
  const classes = useStyles(props);

  const { t } = useTranslation();

  const renderPriceRange = () => {
    const lowestPrice = formatCurrency({
      num: minPrice || 0,
      isCompact: true,
      divide: 1000000,
      currency: "VND",
      symbol: true,
    });
    const highestPrice = formatCurrency({
      num: maxPrice || 0,
      isCompact: true,
      divide: 10000000,
      currency: "VND",
      symbol: true,
    });
    return (
      <Typography variant="subtitle1">{`${lowestPrice.price} - ${highestPrice.price}${highestPrice.currency}`}</Typography>
    );
  };

  return (
    <div className="w-100">
      <div
        className={clsx(
          "d-flex flex-stack flex-wrap flex-md-nowrap align-items-center rounded w-100",
          classes.boxTitle,
          customClasses?.boxTitle
        )}
      >
        <div className="me-2">
          <Typography
            variant="h1"
            className={clsx(classes.title, customClasses?.title)}
          >
            {title}
          </Typography>
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
      <div className={clsx("w-100 mt-2")}>
        {/* BEGIN::Rating And Category */}
        <div className="d-flex flex-wrap align-items-center">
          <div className="d-flex flex-wrap">
            <CustomRating
              paddingX={1}
              label={
                <Typography variant="body2" component="div">
                  {rating}
                </Typography>
              }
              labelPlacement="left"
              size={"5"}
              color={"warning"}
              rating={rating}
              readOnly
              className="me-3"
            />

            {totalPost !== undefined && (
              <Typography variant="body2" component="span">
                {t("common:label.totalPostWithLabel", {
                  label: formatNumber(totalPost || 0, true, 10000),
                })}
              </Typography>
            )}
          </div>
          <div className="bullet w-2px h-20px rounded-24 text-muted mx-8"></div>
          <div className="d-flex flex-wrap">{renderPriceRange()}</div>
          <div className="bullet w-2px h-20px rounded-24 text-muted mx-8"></div>
          <div className="d-flex flex-wrap">
            <Typography variant="subtitle1">{category}</Typography>
          </div>
        </div>
        {/* END::Rating And Category */}

        {/* BEGIN::Address and Contact */}
        <div className="d-flex flex-wrap mt-4 align-items-center">
          <div className="d-flex flex-wrap align-items-center">
            <Typography
              variant="body2"
              component="span"
              className="text__capitalize"
            >
              <i className="flaticon2-location me-2" />
              {address}
            </Typography>
          </div>
          <div className="bullet w-2px h-20px rounded-24 text-muted mx-8"></div>
          <div className="d-flex flex-wrap align-items-center">
            <Typography variant="body2">
              <i className="flaticon2-time me-2" />
              {openTime}
            </Typography>
          </div>
          <div className="bullet w-2px h-20px rounded-24 text-muted mx-8"></div>
          <div className="d-flex flex-wrap align-items-center">
            <Typography variant="body2">
              <i className="flaticon2-phone me-2" />
              {phone}
            </Typography>
          </div>
          <div className="bullet w-2px h-20px rounded-24 text-muted mx-8"></div>
          <div className="d-flex flex-wrap align-items-center">
            <Typography variant="body2">
              <i className="flaticon2-website me-2" />
              {website}
            </Typography>
          </div>
        </div>
        {/* END::Address and Contact */}
      </div>
    </div>
  );
};

export default PlaceBriefInfo;
