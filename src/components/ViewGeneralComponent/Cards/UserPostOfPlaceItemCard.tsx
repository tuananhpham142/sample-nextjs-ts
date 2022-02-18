import BookmarkIcon from "@/assets/svg/Bookmark.icon";
import CommentIcon from "@/assets/svg/Comment.icon";
import HeartIcon from "@/assets/svg/Heart.icon";
import { UserPostOfPlace } from "@/models/UserPost/UserPostModel";
import { timeAgoOrDate } from "@/utils/dateTime.utils";
import { trimmedTextByCharacters } from "@/utils/string.utils";
import {
  isContainJsInjection,
  isContainSqlInjection,
} from "@/utils/validator.utils";
import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import ActionMenuButton from "../ActionMenuButton";

interface UserPostOfPlaceItemCardProps {
  className?: string;
  data: UserPostOfPlace;
  showRating?: boolean;
  showInteraction?: boolean;
}

const mentionText = (text: string, mention: string) => {
  let htmlText = trimmedTextByCharacters(text, 120).replace(
    "{{mention}}",
    `<strong class="text-hover-primary hoverable">${mention}</strong>`
  );
  if (isContainSqlInjection(htmlText) || isContainJsInjection(htmlText)) {
    return text;
  }
  return htmlText;
};

const UserPostOfPlaceItemCard: FunctionComponent<
  UserPostOfPlaceItemCardProps
> = (props: UserPostOfPlaceItemCardProps) => {
  const { className, data, showRating, showInteraction } = props;
  const { t } = useTranslation();

  return (
    <div className="card card-stretch p-0 shadow-none rounded-8">
      {/* BEGIN::Card header */}
      <CustomSimpleCard
        action={
          <ActionMenuButton
            item={null}
            onClick={() => console.log("asd")}
            actions={[
              {
                title: "test",
                action: () => {},
              },
            ]}
          />
        }
        title={data.place.name}
        subtitle={data.place.address}
        titleLine={1}
        className="mb-3"
      />
      {/* END::Card header */}
      {/* BEGIN::Image Grid */}
      <CustomGalleryGrid
        items={data.media}
        height={332}
        rounded
        gap={2}
        openPopup={false}
        className="mb-3"
      />
      {/* END::Image Grid */}
      {/* BEGIN::Reaction */}
      <div className="d-flex flex-stack mb-3">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-3">
            <Typography
              component="span"
              variant="body2"
              className="text-dark hoverable fw-bold text-hover-primary"
            >
              <CommentIcon
                size="3"
                color="dark"
                hoverColor="primary"
                className="me-1"
              />
              {data.totalComment}
            </Typography>
          </div>
          <div className="d-flex align-items-center me-3">
            <Typography
              component="span"
              variant="body2"
              className="text-dark hoverable fw-bold text-hover-danger"
            >
              <HeartIcon
                size="3"
                color="dark"
                hoverColor="danger"
                className="me-1"
              />
              {data.totalLike}
            </Typography>
          </div>
          <div className="d-flex align-items-center">
            <Typography
              component="span"
              variant="body2"
              className="text-dark hoverable fw-bold text-hover-info"
            >
              <BookmarkIcon size="3" color="dark" hoverColor="info" />
              {data.totalSave}
            </Typography>
          </div>
        </div>
        <CustomRating
          label={null}
          labelPlacement="left"
          size={"8"}
          color={"warning"}
          rating={4}
          readOnly
        />
      </div>
      {/* END::Reaction */}
      {/* BEGIN::Content */}
      <div className="mb-3">
        <div className="navi-text">
          <Typography
            variant="body1"
            className="mb-2"
            dangerouslySetInnerHTML={{
              __html: mentionText(data.content, data.user.name),
            }}
          ></Typography>

          <Typography
            variant="body2"
            component="a"
            href=""
            className="text-hover-primary"
          >
            {timeAgoOrDate(data.updatedDate, "weeks", 4, true)}
          </Typography>
        </div>
      </div>
      {/* END::Content */}
    </div>
  );
};

UserPostOfPlaceItemCard.defaultProps = {
  showRating: true,
  showInteraction: true,
};

export default UserPostOfPlaceItemCard;
