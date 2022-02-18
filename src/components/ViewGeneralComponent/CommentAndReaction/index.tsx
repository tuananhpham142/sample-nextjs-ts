import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Fragment, FunctionComponent } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles<Theme, CommentAndReactionProps>(
  (theme: Theme) => ({
    stickyInput: {
      position: "sticky",
      bottom: 0,
      zIndex: 1,
    },
  })
);

interface CommentRequestInterface {
  comment: string;
}

interface CommentAndReactionProps {
  className?: string;
  commentSticky?: boolean;
}

const CommentAndReaction: FunctionComponent<CommentAndReactionProps> = (
  props: CommentAndReactionProps
) => {
  const { className, commentSticky } = props;
  const classes = useStyles(props);

  const {
    register,
    formState,
    handleSubmit,
    watch,
    setValue,
    getValues,
    clearErrors,
    unregister,
    control,
  } = useForm<CommentRequestInterface>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    defaultValues: {
      comment: "",
    },
  });

  return (
    <Fragment>
      {/* BEGIN: Footer actions */}
      <div className="d-flex justify-content-between pt-0 pb-0 border-top-0">
        <div className="d-flex align-items-center mb-5">
          <CustomButton
            id="somebutton"
            height={100}
            size="sm"
            onClick={() => {
              console.log("Execute Function");
            }}
            circle={false}
            startIcon={<i className="flaticon-comment" />}
            variant={"light"}
            color={"light-primary"}
            title={"12"}
            className="me-4 py-2 px-4"
          />
          <CustomButton
            id="somebutton"
            height={100}
            size="sm"
            onClick={() => {
              console.log("Execute Function");
            }}
            circle={false}
            startIcon={<i className="flaticon-like" />}
            variant={"light"}
            color={"light-danger"}
            title={"1402"}
            className="me-4 py-2 px-4"
          />
        </div>
      </div>
      {/* END: Footer actions */}
      {/* BEGIN: Card Comments */}
      <div className="mb-7 ps-10">
        <div className="d-flex mb-5">
          <div className="symbol symbol-45px me-5">
            <img
              src="https://images.unsplash.com/photo-1621539208013-3b35b4b6235b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
              alt="image"
            />
          </div>

          <div className="d-flex flex-column flex-row-fluid">
            <div className="d-flex align-items-center flex-wrap mb-1">
              <a
                href="#"
                className="text-gray-800 text-hover-primary fw-bolder me-2"
              >
                Alice Danchik
              </a>
              <span className="text-gray-400 fw-bold fs-7">1 day</span>
              <a
                href="#"
                className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7"
              >
                Reply
              </a>
            </div>

            <span className="text-gray-800 fs-7 fw-normal pt-1">
              Long before you sit dow to put digital pen to paper you need to
              make sure you have to sit down and write.
            </span>
          </div>
        </div>

        <div className="d-flex">
          <div className="symbol symbol-45px me-5">
            <img
              src="https://images.unsplash.com/photo-1621539208013-3b35b4b6235b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
              alt="image"
            />
          </div>

          <div className="d-flex flex-column flex-row-fluid">
            <div className="d-flex align-items-center flex-wrap mb-1">
              <a
                href="#"
                className="text-gray-800 text-hover-primary fw-bolder me-2"
              >
                Harris Bold
              </a>
              <span className="text-gray-400 fw-bold fs-7">2 days</span>
              <a
                href="#"
                className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7"
              >
                Reply
              </a>
            </div>

            <span className="text-gray-800 fs-7 fw-normal pt-1">
              Outlines keep you honest. They stop you from indulging in poorly
            </span>
          </div>
        </div>
      </div>
      {/* END: Card Comments */}
      <div className="separator mb-4"></div>
      {/* BEGIN: Comment Input */}
      <div
        className={clsx({
          [classes.stickyInput]: commentSticky,
          ["bg-white pt-2"]: commentSticky,
          ["position-relative mb-6"]: !commentSticky,
        })}
      >
        <CustomFreeStyleInput
          className="min-h-25px"
          disabled={false}
          multiline={true}
          rows={1}
          id={`comment`}
          name={`comment`}
          placeholder="Nhập bình luận của bạn..."
          control={control}
        />
      </div>
      {/* END: Comment Input */}
    </Fragment>
  );
};

export default CommentAndReaction;
