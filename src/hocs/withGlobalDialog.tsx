import {
  FormTypeWithData,
  GlobalDialogFormDataType
} from "@/models/interfaces/globalDialogInterface";
import {
  closeGlobalFormDialog,
  closeGlobalInfoDialog
} from "@/store/globalDialog";
import { AppDispatch, RootState } from "@/store/redux";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const withGlobalAppForm = (WrappedComponent: any) => (props: any) => {
  const formType = useSelector<RootState, FormTypeWithData>(
    (state) => state.globalDialog.formType
  );
  const openForm = useSelector<RootState, boolean>(
    (state) => state.globalDialog.openFormDialog
  );
  const isLoading = useSelector<RootState, boolean>(
    (state) => state[formType].isLoading
  );
  const initialData = useSelector<RootState, any>(
    (state) => state.globalDialog.initialInfoData
  );

  const dispatch: AppDispatch = useDispatch();

  const handleCloseFormDialog = () => {
    dispatch(closeGlobalFormDialog({}));
  };
  const handleCloseInfoDialog = () => {
    dispatch(closeGlobalInfoDialog({}));
  };

  const handleSubmitForm = async (request?: GlobalDialogFormDataType) => {
    switch (formType) {
      case "auth":
        // Dispatch action
        await dispatch(closeGlobalFormDialog({}));
        break;
      case "place":
        // Dispatch action
        await dispatch(closeGlobalFormDialog({}));
        break;
    }
    return;
  };

  return (
    <Fragment>
      <WrappedComponent {...props} />

      {openForm && formType === "auth" && (
        <CustomDialog
          type={"warning"}
          open={openForm}
          maxWidth={"md"}
          fullWidth={true}
          title={"Xác nhận hành động"}
          onCancel={handleCloseFormDialog}
          onClose={handleCloseFormDialog}
          onSubmit={handleSubmitForm}
          submitTitle={"Xác nhận"}
          cancelTitle="Đóng"
        >
          {"Some form here"}
        </HaloDialog>
      )}
    </Fragment>
  );
};
export default withGlobalAppForm;
