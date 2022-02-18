import { NotificationVariant } from "@/models/interfaces/globalInterface";
import { timeAgoOrDate } from "@/utils/dateTime.utils";
import {
  isContainJsInjection,
  isContainSqlInjection,
} from "@/utils/validator.utils";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Moment } from "moment";
import { Fragment, FunctionComponent } from "react";

const useStyles = makeStyles<Theme, NotificationItemProps>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    borderRadius: "0",
    boxShadow: "none",
  },
}));

interface NotificationItemProps {
  title: string;
  mention?: string;
  image: string;
  readed: boolean;
  since: Moment | string;
  variant: NotificationVariant;
  acceptUrl?: string;
  declineUrl?: string;
  url: string;
}
const NotificationItem: FunctionComponent<NotificationItemProps> = (
  props: NotificationItemProps
) => {
  const {
    title,
    image,
    readed,
    since,
    variant,
    acceptUrl,
    declineUrl,
    mention,
    url,
  } = props;
  const classes = useStyles(props);

  const renderVariantIcon = () => {
    switch (variant) {
      case "like":
        return (
          <i className="symbol-badge symbol-badge-bottom p-4 bg-light-danger d-flex justify-content-center align-items-center">
            <i className="flaticon3-heart text-danger icon-md"></i>
          </i>
        );
      case "comment":
        return (
          <i className="symbol-badge symbol-badge-bottom p-4 bg-light-success d-flex justify-content-center align-items-center">
            <i className="flaticon3-speech-bubble text-success icon-md"></i>
          </i>
        );
      case "plantrip":
        return (
          <i className="symbol-badge symbol-badge-bottom p-4 bg-light-info d-flex justify-content-center align-items-center">
            <i className="flaticon2-paper-plane text-info icon-md"></i>
          </i>
        );
      case "share":
        return (
          <i className="symbol-badge symbol-badge-bottom p-4 bg-primary d-flex justify-content-center align-items-center">
            <i className="flaticon3-share text-white icon-md"></i>
          </i>
        );
      case "group":
        return (
          <i className="symbol-badge symbol-badge-bottom p-4 bg-light-warning d-flex justify-content-center align-items-center">
            <i className="flaticon3-multiple-users-silhouette text-warning icon-md"></i>
          </i>
        );
      case "feed":
        return (
          <i className="symbol-badge symbol-badge-bottom p-4 bg-light-primary d-flex justify-content-center align-items-center">
            <i className="flaticon3-newsfeed text-primary icon-1x"></i>
          </i>
        );
      case "notification":
        return (
          <i className="symbol-badge symbol-badge-bottom p-4 bg-light-dark d-flex justify-content-center align-items-center">
            <i className="flaticon-bell text-gray-400 icon-md"></i>
          </i>
        );

      default:
        return (
          <i className="symbol-badge symbol-badge-bottom p-4 bg-light-dark d-flex justify-content-center align-items-center">
            <i className="flaticon-bell text-gray-400 icon-md"></i>
          </i>
        );
    }
  };

  const mentionText = (text: string) => {
    let htmlText = text.replace("{{mention}}", `<strong>${mention}</strong>`);
    if (isContainSqlInjection(htmlText) || isContainJsInjection(htmlText)) {
      return text;
    }
    return htmlText;
  };

  const handleAccept = () => {};

  const handleDecline = () => {};

  return (
    <Fragment>
      <Typography
        className="navi-item d-flex bg-hover-light-primary justify-content-start align-items-start py-2 px-4"
        onClick={() => null}
      >
        <div className="navi-link rounded">
          <div className="symbol symbol-60 me-3">
            <div
              className="symbol-label"
              style={{
                backgroundImage: `url("/media/users/300_21.jpg")`,
              }}
            >
              {renderVariantIcon()}
            </div>
          </div>
        </div>
        <div className="navi-link">
          <div className="navi-text">
            {mention ? (
              <span
                className="text-gray-800"
                dangerouslySetInnerHTML={{ __html: mentionText(title) }}
              ></span>
            ) : (
              <span className="text-gray-800">{title}</span>
            )}

            <div className="text-primary fw-bold">
              {timeAgoOrDate(since, "weeks", 4, true)}
            </div>
            {acceptUrl && declineUrl && (
              <div className="d-flex align-items-center mt-4">
                <CustomButton
                  id="acceptButton"
                  className="me-4"
                  width={"100px"}
                  height={100}
                  size="sm"
                  onClick={handleAccept}
                  circle={false}
                  variant={"contained"}
                  color={"primary"}
                  title={"Accept"}
                />
                <CustomButton
                  id="acceptButton"
                  width={"100px"}
                  height={100}
                  size="sm"
                  onClick={handleDecline}
                  circle={false}
                  variant={"contained"}
                  color={"light"}
                  title={"Decline"}
                />
              </div>
            )}
          </div>
        </div>
      </Typography>
    </Fragment>
  );
};

export default NotificationItem;
