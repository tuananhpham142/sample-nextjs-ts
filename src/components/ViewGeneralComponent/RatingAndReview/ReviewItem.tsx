import { UserBriefInfo } from "@/models/User/UserModel";
import { formatDateString } from "@/utils/dateTime.utils";
import { trimmedTextByCharacters } from "@/utils/string.utils";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Moment } from "moment";
import { Fragment, FunctionComponent, useState } from "react";

const useStyles = makeStyles<Theme, ReviewItemProps>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    borderRadius: "0",
    boxShadow: "none",
  },
}));

interface ReviewItemProps {
  className?: string;
  user: UserBriefInfo;
  content: string;
  date: Moment | string;
  like: number;
}
const ReviewItem: FunctionComponent<ReviewItemProps> = (
  props: ReviewItemProps
) => {
  const { className, user, content, date, like } = props;
  const classes = useStyles(props);
  const [viewAll, setViewAll] = useState<boolean>(false);
  // TODO: Open review detail dialog ( use global dialog for better performance, dialog use no SSR mode )
  return (
    <Fragment>
      <div
        className={clsx(
          "d-flex align-items-sm-center bg-light-white bg-hover-white shadow-xs p-2 my-4 card card-xl-stretch shadow-xs",
          className
        )}
      >
        <div className="card-body p-4">
          <div className="d-flex align-items-center">
            <CustomSimpleCard
              circle
              title={user.name}
              subtitle={formatDateString(date)}
              label={`${like} likes`}
              color="light-warning"
              imgUrl={user.avatar}
            />
          </div>

          {/* BEGIN: Content */}
          <Typography variant="body1" className="mt-2">
            {viewAll ? content : trimmedTextByCharacters(content, 155)}

            {!viewAll && content.length > 155 && (
              <span
                className="text-hover-primary text-primary fw-bold hoverable"
                onClick={() => setViewAll(!viewAll)}
              >
                Xem thêm
              </span>
            )}
          </Typography>
          {/* END: Content */}
        </div>
      </div>
    </Fragment>
  );
};

export default ReviewItem;
