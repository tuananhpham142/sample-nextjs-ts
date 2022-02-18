import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FunctionComponent, ReactNode } from "react";

const useStyles = makeStyles<Theme, ConfirmActionDialogProps>(
  (theme: Theme) => ({
    root: {
      marginTop: theme.spacing(3),
      borderRadius: "0",
      boxShadow: "none",
    },
  })
);

interface ConfirmActionDialogProps {
  className?: string;
  title: string;
  content: string | ReactNode | HTMLElement;
  onSubmit: () => void;
  open: boolean;
  onCancel?: () => void;
  onClose?: () => void;
  onUnmount?: () => void;
}
const ConfirmActionDialog: FunctionComponent<ConfirmActionDialogProps> = (
  props: ConfirmActionDialogProps
) => {
  const {
    className,
    onSubmit,
    open,
    onCancel,
    onClose,
    onUnmount,
    title,
    content,
  } = props;
  const classes = useStyles(props);

  return (
    <CustomDialog
      type={"primary"}
      open={open}
      maxWidth={"md"}
      fullWidth={true}
      title={title || "Xác nhận hành động"}
      onCancel={onClose}
      onClose={onClose}
      onSubmit={onSubmit}
      submitTitle={"Xác nhận"}
      cancelTitle="Đóng"
    >
      {content || `Bạn đã chắc chắn với hành động này?`}
    </HaloDialog>
  );
};

export default ConfirmActionDialog;
