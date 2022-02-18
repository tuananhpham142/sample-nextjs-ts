import { DEFAULT_AVATAR } from "@/constants/profile";
import { MyProfileResponeInterface } from "@/models/Profile/ProfileResponse";
import { paths } from "@/routes/routeConfig";
import { Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, FunctionComponent } from "react";

interface ProfileOverviewProps {
  className?: string;
  data: MyProfileResponeInterface;
  showSettingBtn?: boolean;
}
const ProfileOverview: FunctionComponent<ProfileOverviewProps> = (
  props: ProfileOverviewProps
) => {
  const { className, data, showSettingBtn } = props;
  const router = useRouter();
  const { slugname } = router.query;
  return (
    <Fragment>
      <div className={clsx(className, "d-block align-items-start d-sm-flex")}>
        <div className="position-relative  w-50px h-50px min-w-50px min-w-md-100px w-md-100px h-md-100px rounded-circle me-8">
          <Image
            src={data.avatar || DEFAULT_AVATAR}
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className="rounded-circle w-100px h-100px"
          />
          <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
        </div>

        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
            <div className="d-flex flex-column mb-2">
              <Typography className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">
                {data.displayName || data.username}
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-600"
              >{`@${data.username}`}</Typography>
              <div className="d-flex align-items-start flex-wrap mt-2">
                <div className="d-flex flex-column me-7 me-lg-15 mb-2">
                  <span className="text-gray-900">Bài post</span>
                  <Typography className="text-gray-700 fs-1 fw-bolder">
                    {data.totalPosts}
                  </Typography>
                </div>
                <div className="d-flex flex-column me-7 me-lg-15 mb-2">
                  <span className="text-gray-900">Theo dõi</span>
                  <Typography className="text-gray-700 fs-1 fw-bolder">{`${data.totalFollowing} người`}</Typography>
                </div>
                <div className="d-flex flex-column me-7 me-lg-15 mb-2">
                  <span className="text-gray-900">Quan tâm</span>
                  <Typography className="text-gray-700 fs-1 fw-bolder">{`${data.totalSave} địa điểm`}</Typography>
                </div>
                <div className="d-flex flex-column me-7 me-lg-15 mb-2">
                  <span className="text-gray-900">Người theo dõi</span>
                  <Typography className="text-gray-700 fs-1 fw-bolder">{`${data.totalFollower} người`}</Typography>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 w-sm-auto">
              <CustomButton
                height={"30px"}
                size="md"
                onClick={() => {
                  router.push({
                    pathname: paths.UserSettings,
                    query: {
                      slugname: slugname,
                    },
                  });
                }}
                className="pt-0 pb-0 pe-4 ps-4 w-100 w-sm-auto"
                variant={"outline"}
                color={"warning"}
                title={"Cài đặt"}
                startIcon={
                  <>
                    <span className="flaticon-settings me-3"></span>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileOverview;
