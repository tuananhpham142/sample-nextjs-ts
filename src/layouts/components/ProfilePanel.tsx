import { Typography } from "@mui/material";
import clsx from "clsx";
import { Fragment, FunctionComponent, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
interface ProfilePanelProps {
  show: boolean;
  onClose: () => void;
}

// const useStyles = makeStyles<Theme, ProfilePanelProps>((theme: Theme) => ({}));

const ProfilePanel: FunctionComponent<ProfilePanelProps> = (
  props: ProfilePanelProps
) => {
  const { show, onClose } = props;
  // const classes = useStyles(props);
  const [selectedTab, setSelectedTab] = useState<string>("AuditLogs");

  const setTab = (_tabName: string) => {
    setSelectedTab(_tabName);
  };

  return (
    <Fragment>
      <div className="offcanvas-overlay"></div>
      <OutsideClickHandler onOutsideClick={onClose}>
        <div
          className={clsx({
            [`offcanvas offcanvas-right pt-5 pb-10 px-6`]: true,
            ["offcanvas-on"]: show,
          })}
        >
          <div className="bg-white">
            {/*begin::Header*/}
            <div className="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
              <Typography variant="h5" className="fw-bold m-0">
                General information
              </Typography>
              <Typography
                onClick={onClose}
                className="btn btn-xs btn-icon btn-light btn-hover-primary"
              >
                <i className="ki ki-close icon-xs text-muted"></i>
              </Typography>
            </div>
            {/*end::Header*/}
            <div className="offcanvas-content scroll ps ps--active-y">
              <div className="d-flex align-items-center p-2 bg-hover-light-primary">
                <div className="symbol symbol-60 me-5">
                  <div
                    className="symbol-label"
                    style={{
                      backgroundImage: `url("/media/users/300_21.jpg")`,
                    }}
                  ></div>
                  <i className="symbol-badge bg-success"></i>
                </div>
                <div className="d-flex flex-column">
                  <a className="fw-bold fs-5 text-gray-800 text-hover-primary">
                    John Doe
                  </a>
                  <div className="text-muted mt-1">See your profile</div>
                </div>
              </div>
              <div className="separator separator-dashed mt-5 mb-3"></div>
              <div className="navi navi-spacer-x-0 p-0">
                <a className="navi-item p-2 bg-hover-light-primary">
                  <div className="navi-link">
                    <div className="symbol symbol-40 bg-light me-3">
                      <div className="symbol-label">
                        <i className="flaticon2-settings icon-lg text-primary"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="fw-bold">Settings & privacy</div>
                    </div>
                  </div>
                </a>

                <a className="navi-item p-2 bg-hover-light-primary">
                  <div className="navi-link">
                    <div className="symbol symbol-40 bg-light me-3">
                      <div className="symbol-label">
                        <i className="flaticon3-help-web-button icon-lg text-primary"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="fw-bold">Help & Support</div>
                    </div>
                  </div>
                </a>

                <a className="navi-item p-2 bg-hover-light-primary">
                  <div className="navi-link">
                    <div className="symbol symbol-40 bg-light me-3">
                      <div className="symbol-label">
                        <i className="flaticon3-display-frame icon-lg text-primary"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="fw-bold">Display & accessibility</div>
                    </div>
                  </div>
                </a>

                <a className="navi-item p-2 bg-hover-light-primary">
                  <div className="navi-link">
                    <div className="symbol symbol-40 bg-light me-3">
                      <div className="symbol-label">
                        <i className="flaticon3-logout icon-lg text-primary"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="fw-bold">Logout</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="separator separator-dashed mt-8 mb-5"></div>
              <div className="navi navi-spacer-x-0 p-0">
                <a className="navi-item p-2 bg-hover-light-primary">
                  <div className="navi-link">
                    <div className="symbol symbol-40 bg-light me-3">
                      <div className="symbol-label">
                        <i className="flaticon-chat icon-lg text-primary"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="fw-bold">Give feedback</div>
                      <div className="text-muted">
                        Help us to improve MotorHome
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </Fragment>
  );
};

export default ProfilePanel;
