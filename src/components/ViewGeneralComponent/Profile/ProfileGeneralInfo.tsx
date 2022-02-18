import { MyProfileResponeInterface } from "@/models/Profile/ProfileResponse";
import { Typography } from "@mui/material";
import clsx from "clsx";
import { Fragment, FunctionComponent } from "react";

interface ProfileGeneralInfoProps {
  className?: string;
  data: MyProfileResponeInterface;
}
const ProfileGeneralInfo: FunctionComponent<ProfileGeneralInfoProps> = (
  props: ProfileGeneralInfoProps
) => {
  const { className, data } = props;
  return (
    <Fragment>
      <div className={clsx(className, "d-flex align-items-start flex-column")}>
        {data.address ? (
          <div className="d-flex align-items-center text-gray-900 mb-2">
            <CustomIconStandalone
              size="1x"
              icon={"flaticon-home"}
              type="icon"
              color="dark"
            />
            <Typography className="text-gray-900 ms-3">
              {data.address}
            </Typography>
          </div>
        ) : (
          <div className="d-flex align-items-center text-gray-900 mb-2">
            <CustomIconStandalone
              size="1x"
              icon={"flaticon-plus"}
              type="icon"
              color="dark"
            />
            <Typography className="text-gray-900 ms-3">
              Thêm thành phố của bạn
            </Typography>
          </div>
        )}
        {data.createdDate && (
          <div className="d-flex align-items-center text-gray-900 mb-2">
            <CustomIconStandalone
              size="1x"
              icon={"flaticon-home"}
              type="icon"
              color="dark"
            />
            <Typography className="text-gray-900 ms-3">
              {data.createdDate}
            </Typography>
          </div>
        )}
        {data.email && (
          <div className="d-flex align-items-center text-gray-900 mb-2">
            <CustomIconStandalone
              size="1x"
              icon={"flaticon-email"}
              type="icon"
              color="dark"
            />
            <a
              href={`mailto: ${data.email}`}
              className="text-gray-900 ms-3 hoverable text-hover-primary d-block"
            >
              {data.email}
            </a>
          </div>
        )}
        {data.phoneNumber && (
          <div className="d-flex align-items-center text-gray-900 mb-2">
            <CustomIconStandalone
              size="1x"
              icon={"flaticon-bell"}
              type="icon"
              color="dark"
            />
            <a
              href={`callto: ${data.phoneNumber}`}
              className="text-gray-900 ms-3 hoverable text-hover-primary d-block"
            >
              {data.phoneNumber}
            </a>
          </div>
        )}
        {data.link && (
          <div className="d-flex align-items-center text-gray-900 mb-2">
            <CustomIconStandalone
              size="1x"
              icon={"flaticon-map-location"}
              type="icon"
              color="dark"
            />
            <a
              href={data.link}
              className="text-gray-900 ms-3 hoverable text-hover-primary d-block"
            >
              {data.link}
            </a>
          </div>
        )}
        <hr className="bg-grey w-100" />
        {data.description && (
          <div className="d-flex align-items-center text-gray-900 mb-2">
            <Typography className="text-gray-900">
              {data.description}
            </Typography>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProfileGeneralInfo;
