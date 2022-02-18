import { ComponentStatusVariant } from "@/models/interfaces/theme";
import { clearSnackbar } from "@/store/customSnackbar";
import { AppDispatch, RootState } from "@/store/redux";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const withSnackbar = (WrappedComponent: any) => (props: any) => {
  const open = useSelector<RootState, boolean | undefined>(
    (state) => state.customSnackbar.open
  );
  const message = useSelector<RootState, string>(
    (state) => state.customSnackbar.message
  );
  const type = useSelector<RootState, ComponentStatusVariant>(
    (state) => state.customSnackbar.type
  );
  const dispatch: AppDispatch = useDispatch();
  return (
    <Fragment>
      <WrappedComponent {...props} />
      {open && (
        <CustomSnackbar
          open={open}
          onClose={(open: boolean) => dispatch(clearSnackbar({}))}
          message={message}
          status={type}
        />
      )}
    </Fragment>
  );
};
export default withSnackbar;
