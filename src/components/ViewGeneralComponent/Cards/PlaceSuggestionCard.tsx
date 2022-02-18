import { FixedLengthArray } from "@/models/interfaces/customArray";
import { MediaItem } from "@/models/Media/MediaModel";
import { PlaceDetail } from "@/models/Places/PlaceResponse";
import { THEME_COLOR_SECONDARY_INVERSE } from "@/styles/colorPalette";
import { formatNumber } from "@/utils/number.utils";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles<Theme, PlaceSuggestionCardProps>(
  (theme: Theme) => ({
    title: {
      float: "left",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "break-spaces",
      wordBreak: "break-word",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: (props) => props?.titleLine || 1,
    },
    maxHeightImage: {
      maxHeight: 200,
    },
    maxHeightBanner: {
      maxHeight: 60,
    },
  })
);

interface PlaceSuggestionCardProps {
  className?: string;
  title: string;
  titleLine?: 1 | 2;
  place: PlaceDetail;
  image?: MediaItem;
  similarPlaces: FixedLengthArray<[PlaceDetail, PlaceDetail, PlaceDetail]>;
}
const PlaceSuggestionCard: FunctionComponent<PlaceSuggestionCardProps> = (
  props: PlaceSuggestionCardProps
) => {
  const { className, title, similarPlaces, image, place } = props;
  const classes = useStyles(props);

  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="card card-xl-stretch shadow-xs">
        <div className="card-header border-0 align-items-center">
          <Typography variant="h5">{title}</Typography>
        </div>

        <div className="card-body pt-0">
          <div className="d-flex align-items-center mb-4">
            <CustomSimpleCard
              title={place.name}
              subtitle={t("common:label.totalPostWithLabel", {
                label: formatNumber(place?.totalPost || 0, true),
              })}
              label={t("common:label.viewPlace")}
              color="light-warning"
              imgUrl={place.avatar?.thumbnail || place.avatar?.src}
            />
          </div>
          {image && (
            <div className="d-flex align-items-center mb-2">
              <CustomBanner
                className={classes.maxHeightImage}
                height={image.height || 200}
                rounded={true}
                imgUrl={image.src}
                align="center"
              />
            </div>
          )}
          {similarPlaces &&
            similarPlaces.map((place: PlaceDetail) => {
              return (
                <div className="d-flex align-items-center mb-2">
                  <CustomBanner
                    height={60}
                    title={
                      <Typography
                        variant="h6"
                        className={clsx(
                          "text-white fw-bolder text__uppercase",
                          classes.title
                        )}
                      >
                        {place.name}
                      </Typography>
                    }
                    description={
                      <Typography
                        variant="body1"
                        className="text-white text__uppercase"
                      >
                        {t("common:label.totalPostWithLabel", {
                          label: formatNumber(place?.totalPost || 0, true),
                        })}
                      </Typography>
                    }
                    overlayColor={THEME_COLOR_SECONDARY_INVERSE}
                    overlayOpacity={0.6}
                    rounded={true}
                    imgUrl={place.cover.src}
                    align="center"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default PlaceSuggestionCard;
