import SaveAnimation from "@/components/SaveAnimation/SaveAnimation.jsx";
import { useHover } from "@/hooks/useHover";
import { ComponentBackgroundVariant } from "@/models/interfaces/theme";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Fragment, FunctionComponent, ReactNode, useState } from "react";
import { isMobile } from "react-device-detect";
import { useSwipeable } from "react-swipeable";

const useStyles = makeStyles<Theme, PlaceItemCardProps>((theme: Theme) => ({
  container: {
    // [theme.breakpoints.only('xs')]: {
    //     width: 220,
    // },
    // [theme.breakpoints.up('lg')]: {
    //     minWidth: 240,
    // },
  },

  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    display: "-webkit-box",
    WebkitLineClamp: (props) => props.titleLine || 1,
    WebkitBoxOrient: "vertical",
  },

  subtitle: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    display: "-webkit-box",
    WebkitLineClamp: (props) => props.subtitleLine || 1,
    WebkitBoxOrient: "vertical",
  },
  likeButton: {
    bottom: 8,
    left: 8,
  },
  unSaveButton: {
    overflow: "hidden",
    transition: "all 0.6s ease",
    "&>div": {
      width: "calc(100% + 90px)",
      transform: "translateX(-90px)",
      paddingRight: 10,
    },
  },
  justifyUnSaveButton: {
    marginRight: "-1rem !important",
  },
}));

interface PlaceItemCardProps {
  className?: string;
  title: string;
  titleLine?: 1 | 2;
  subtitleLine?: 1 | 2;
  subtitle: string | ReactNode;
  imgAlt?: string;
  rating?: number;
  totalPost?: number;
  showSaveIcon?: boolean;
  horizontal?: boolean;
  unSaveButtonContent?: ReactNode;
  unSaveButtonBg?: ComponentBackgroundVariant;
  handleUnsaveButton?: () => void;
  onClick?: () => void;
}
const PlaceItemCard: FunctionComponent<PlaceItemCardProps> = (
  props: PlaceItemCardProps
) => {
  const {
    className,
    title,
    subtitle,
    totalPost,
    rating,
    showSaveIcon,
    titleLine,
    subtitleLine,
    imgAlt,
    onClick,
    horizontal,
    unSaveButtonContent,
    // showUnSaveButton,
    handleUnsaveButton,
    unSaveButtonBg,
  } = props;
  const classes = useStyles(props);

  const [hovered, eventHandlers] = useHover();
  const [showUnSaveButton, setShowUnsaveBtn] = useState<boolean>(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (isMobile) setShowUnsaveBtn(true);
    },
    onSwipedRight: () => {
      if (isMobile) setShowUnsaveBtn(false);
    },
    onTap: () => {},
  });

  const renderContent = () => {
    return (
      <>
        <Typography
          variant="subtitle1"
          component="a"
          href="../../demo1/dist/pages/profile/overview.html"
          className={clsx("text-hover-primary mb-1 float-start", classes.title)}
        >
          {title}
        </Typography>
        {typeof subtitle === "string" ? (
          <Typography
            variant="body2"
            component="p"
            className={clsx(
              "mb-3 hoverable text-hover-primary",
              classes.subtitle
            )}
          >
            {subtitle}
          </Typography>
        ) : (
          <>{subtitle}</>
        )}
      </>
    );
  };
  const renderRatingAndTotalPost = () => {
    return (
      <div className="d-flex flex-wrap">
        {rating !== undefined && (
          <CustomRating
            label={
              <Typography
                variant="body2"
                component="div"
                className="fw-bolder text-hover-primary hoverable"
              >
                {rating}
              </Typography>
            }
            labelPlacement="left"
            size={"8"}
            color={"warning"}
            rating={rating}
            readOnly
            className="me-3"
          />
        )}
        {totalPost !== undefined && (
          <Typography
            variant="body2"
            component="div"
            className="fw-bolder text-hover-primary hoverable"
          >
            {totalPost} posts
          </Typography>
        )}
      </div>
    );
  };

  return (
    <Fragment>
      <div
        className={clsx("card card-xl-stretch w-100", {
          [classes.container]: true,
          [`${className}`]: true,
          [classes.unSaveButton]: horizontal && showUnSaveButton ? true : false,
          // [`px-2 py-1`]: horizontal,
        })}
        onClick={() => {
          if (onClick) onClick();
        }}
        {...eventHandlers}
      >
        {horizontal ? (
          <div
            {...handlers}
            className={clsx("d-flex hoverable align-items-center", {
              [`pr-2`]: !showUnSaveButton,
            })}
          >
            <div
              className="d-block w-90px h-90px bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative hoverable bg-light"
              title={imgAlt}
              style={{
                backgroundImage: `url("https://source.unsplash.com/random")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "initial",
                backgroundPosition: "center",
                // width: '100%',
                // height: '100%',
              }}
            ></div>
            <div
              className="d-flex flex-column ps-4 align-items-between"
              style={{
                width: `calc(100% - 90px)`,
              }}
            >
              {renderContent()}
              {/* BEGIN::Rating */}
              <div className="d-flex align-items-center justify-content-between">
                {renderRatingAndTotalPost()}
                {showSaveIcon && (
                  <SaveAnimation
                    className={clsx(
                      `bg-white bg-opacity-50 rounded-360 p-0 h-30px w-30px justify-content-center align-items-center d-flex`,
                      classes.likeButton
                    )}
                    width={"45"}
                    height={"45"}
                  />
                )}
              </div>
            </div>
            {showUnSaveButton && isMobile && (
              <div
                // className='d-block w-90px h-100 position-relative hoverable bg-danger'
                className={clsx(
                  `w-90px h-100px bg-${
                    unSaveButtonBg || "danger"
                  } d-flex align-items-center flex-column justify-content-center`,
                  classes.justifyUnSaveButton
                )}
                onClick={() => {
                  if (typeof handleUnsaveButton === "function")
                    handleUnsaveButton();
                }}
              >
                {unSaveButtonContent ? (
                  <>{unSaveButtonContent}</>
                ) : (
                  <>
                    <CustomIconStandalone
                      size="1x"
                      type="icon"
                      className="fw-bolder"
                      icon="flaticon-close"
                      circle
                      color="white"
                    />
                    <Typography
                      variant="caption"
                      color="white"
                      className="fw-bolder"
                    >
                      Bỏ theo dõi
                    </Typography>
                  </>
                )}
              </div>
            )}
          </div>
        ) : (
          <>
            <div
              className="d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-1 hoverable bg-light"
              title={imgAlt}
              style={{
                backgroundImage: `url("https://source.unsplash.com/random")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "initial",
                backgroundPosition: "center",
              }}
            >
              {showSaveIcon && (
                <SaveAnimation
                  className={clsx(
                    `position-absolute bg-white bg-opacity-50 rounded-360 p-0 h-30px w-30px justify-content-center align-items-center d-flex`,
                    classes.likeButton
                  )}
                  width={"45"}
                  height={"45"}
                />
              )}
            </div>

            <div className="m-0 d-flex flex-column">{renderContent()}</div>
            {/* BEGIN::Rating */}
            {renderRatingAndTotalPost()}
            {/* END::Rating */}
          </>
        )}
      </div>
    </Fragment>
  );
};

export default PlaceItemCard;
