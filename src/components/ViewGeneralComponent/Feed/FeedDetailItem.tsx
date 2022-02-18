import CustomCarousel from "@/components/ImageSlider/CustomCarousel";
import { MediaItem } from "@/models/Media/MediaModel";
import { toSlug } from "@/utils/string.utils";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import FeedItem from ".";

const useStyles = makeStyles<Theme, FeedDetailItemProps>((theme: Theme) => ({
  scrollableView: {
    height: (props) =>
      props.viewMode === "detailPage"
        ? `calc(80vh - 100px)`
        : `calc(100vh - 80px)`,
    overflowY: "auto",
  },
  maxHeightContainer: {
    height: (props) => (props.viewMode === "detailPage" ? `80vh` : `100vh`),
    overflowY: "auto",
  },
}));

interface FeedDetailItemProps {
  className?: string;
  media: Array<MediaItem>;
  viewMode?: "dialog" | "detailPage";
  rounded?: boolean;
}
const FeedDetailItem: FunctionComponent<FeedDetailItemProps> = (
  props: FeedDetailItemProps
) => {
  const { className, media, viewMode, rounded } = props;
  const classes = useStyles(props);

  const { t } = useTranslation();

  return (
    <Fragment>
      <div
        className={clsx("card shadow-xs w-100", classes.maxHeightContainer, {
          ["rounded-24"]: rounded,
          ["p-5"]: viewMode === "detailPage",
        })}
      >
        <div className="card-body h-100 p-0 w-100 d-flex flex-row flex-column-fluid">
          {/* BEGIN::Media */}
          <div className="wrapper d-flex flex-column flex-row-fluid h-100">
            <div className="h-100 d-flex flex-column flex-column-fluid">
              <CustomCarousel
                data={media}
                background={viewMode === "dialog" ? "black" : "light-dark"}
                rounded={rounded}
              />
            </div>
          </div>
          {/* END::Media */}

          {/* BEGIN::Feed */}
          <div
            className={clsx("w-xl-400px w-lg-350px w-md-320px h-100", {
              [`ps-6 pe-8`]: viewMode === "dialog",
              [`ps-6`]: viewMode === "detailPage",
            })}
          >
            <div
              className="bg-white py-1"
              style={{ position: "sticky", top: 0, zIndex: 1 }}
            >
              <CustomSimpleCard
                action={
                  <CustomIconStandalone
                    size="1x"
                    icon="flaticon-more-v6"
                    onClick={() => {}}
                    color="dark"
                    className="text-hover-primary me-4"
                  />
                }
                title={"Nhà hàng Thanh Mai"}
                subtitle={"Số 15, ngõ 195 Đội Cấn, Ba Đình, Tp.Hà Nội"}
                titleLine={1}
                className="mb-6"
              />
            </div>
            <FeedItem
              address={"asdasdasd"}
              url={toSlug("asdasd")}
              id={"place.PlaceId"}
              shadow="none"
              commentSticky
              bodyClassName={classes.scrollableView}
            />
          </div>
          {/* END::Feed */}
        </div>
      </div>
    </Fragment>
  );
};

FeedDetailItem.defaultProps = {
  rounded: true,
};

export default FeedDetailItem;
