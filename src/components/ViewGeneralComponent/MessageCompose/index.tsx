import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Fragment, FunctionComponent, lazy } from "react";
import { useForm } from "react-hook-form";
const HaloRichTextEditor = lazy(() => import("@/components/RichTextEditor"));

const useStyles = makeStyles<Theme, MessageComposeProps>((theme: Theme) => ({
  show: {
    display: "block",
  },
  content: {
    height: 250,
  },
}));

interface MessageComposeProps {
  isOpen: boolean;
}
const MessageCompose: FunctionComponent<MessageComposeProps> = (
  props: MessageComposeProps
) => {
  const { isOpen } = props;
  const classes = useStyles(props);

  const { formState, handleSubmit, setValue, getValues, control } = useForm<{
    to: string;
    subject: string;
    content: string;
  }>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    defaultValues: {
      to: "",
      subject: "",
      content: "",
    },
  });

  const handleChangeContent = (value: string) => {
    setValue("content", value, { shouldDirty: true });
  };

  return (
    <Fragment>
      <div
        className={clsx({
          "modal modal-sticky modal-sticky-lg modal-sticky-bottom-right": true,
          [classes.show]: isOpen,
        })}
        id="kt_inbox_compose"
        role="dialog"
        data-backdrop="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form id="kt_inbox_compose_form">
              <div className="d-flex align-items-center justify-content-between py-5 pl-8 pr-5 border-bottom">
                <h5 className="fw-bold m-0">Tin nhắn</h5>
                <div className="d-flex ms-2">
                  <span className="btn btn-clean btn-sm btn-icon me-2">
                    <CustomIconStandalone size={"1"} icon="flaticon2-arrow-1" />
                  </span>
                  <span
                    className="btn btn-clean btn-sm btn-icon"
                    data-dismiss="modal"
                  >
                    <CustomIconStandalone size={"1"} icon="flaticon2-cross" />
                  </span>
                </div>
              </div>

              <div className="d-block">
                <div className="d-flex align-items-center border-bottom inbox-to px-8 min-h-45px">
                  <Typography variant="body1">Tới:</Typography>
                  <div className="d-flex align-items-center flex-grow-1">
                    <CustomFreeStyleInput
                      disabled={false}
                      id={`to`}
                      name={`to`}
                      placeholder="Message to"
                      control={control}
                    />
                  </div>
                </div>

                <div className="border-bottom">
                  <CustomFreeStyleInput
                    className="px-8 min-h-45px"
                    disabled={false}
                    id={`subject`}
                    name={`subject`}
                    placeholder="Tiêu đề"
                    control={control}
                  />
                </div>

                <div
                  id="kt_inbox_compose_editor"
                  className="border-0"
                  style={{ height: 250 }}
                >
                  <CustomRichTextEditor
                    defaultValue=""
                    control={control}
                    name="content"
                    classname={classes.content}
                    onChange={(value: string) => handleChangeContent(value)}
                    errors={formState.errors}
                  />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between py-5 pl-8 pr-5 border-top">
                <div className="d-flex align-items-center me-3">
                  <div className="btn-group me-4">
                    <span className="btn btn-primary fw-bold px-6">Send</span>
                    <span
                      className="btn btn-primary fw-bold dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                      role="button"
                    ></span>
                    <div className="dropdown-menu dropdown-menu-sm dropup p-0 m-0 dropdown-menu-right">
                      <ul className="navi py-3">
                        <li className="navi-item">
                          <a href="#" className="navi-link">
                            <span className="navi-icon">
                              <i className="flaticon2-writing"></i>
                            </span>
                            <span className="navi-text">Schedule Send</span>
                          </a>
                        </li>
                        <li className="navi-item">
                          <a href="#" className="navi-link">
                            <span className="navi-icon">
                              <i className="flaticon2-medical-records"></i>
                            </span>
                            <span className="navi-text">
                              Save &amp; archive
                            </span>
                          </a>
                        </li>
                        <li className="navi-item">
                          <a href="#" className="navi-link">
                            <span className="navi-icon">
                              <i className="flaticon2-hourglass-1"></i>
                            </span>
                            <span className="navi-text">Cancel</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <span
                    className="btn btn-icon btn-sm btn-clean me-2"
                    id="kt_inbox_compose_attachments_select"
                  >
                    <i className="flaticon2-clip-symbol"></i>
                  </span>
                  <span className="btn btn-icon btn-sm btn-clean">
                    <i className="flaticon2-pin"></i>
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <span
                    className="btn btn-icon btn-sm btn-clean me-2"
                    data-toggle="tooltip"
                    title="More actions"
                  >
                    <i className="flaticon2-settings"></i>
                  </span>
                  <span
                    className="btn btn-icon btn-sm btn-clean"
                    data-inbox="dismiss"
                    data-toggle="tooltip"
                    title="Dismiss reply"
                  >
                    <i className="flaticon2-rubbish-bin-delete-button"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MessageCompose;
