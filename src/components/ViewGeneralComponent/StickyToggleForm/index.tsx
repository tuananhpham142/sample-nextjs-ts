import {
  FormTypeWithChildren,
  FormTypeWithData,
  InfoType,
} from "@/models/interfaces/globalDialogInterface";
import { FC, Fragment } from "react";

interface IProps {}

const StickyToggleAction: FC<IProps> = (props) => {
  const toggleAction = (
    type: FormTypeWithChildren | FormTypeWithData | InfoType
  ) => {};

  return (
    <Fragment>
      <div className="position-fixed fw-bolder zindex-2 top-50 mt-10 end-0 rounded-top-0">
        <ul className="sticky-toolbar nav flex-column pt-2 pb-7 mt-4 align-items-center">
          <CustomIconStandalone
            size={"5"}
            className="mb-2 shadow-sm"
            type="button"
            buttonSize="sm"
            color="primary"
            icon="flaticon2-user"
            onClick={toggleAction}
          />
          <CustomIconStandalone
            size={"5"}
            className="mb-2 shadow-sm"
            type="button"
            buttonSize="sm"
            color="light-success"
            icon="flaticon2-add-1"
            onClick={toggleAction}
          />
          <CustomIconStandalone
            size={"5"}
            className="mb-2 shadow-sm"
            type="button"
            buttonSize="sm"
            color="light-danger"
            icon="flaticon2-line"
            onClick={toggleAction}
          />
          <CustomIconStandalone
            size={"5"}
            className="mb-2 shadow-sm"
            type="button"
            buttonSize="sm"
            color="light-warning"
            icon="flaticon2-list"
            onClick={toggleAction}
          />
          <CustomIconStandalone
            size={"5"}
            className="mb-2 shadow-sm"
            type="button"
            buttonSize="sm"
            color="light-primary"
            icon="flaticon-list"
            onClick={toggleAction}
          />
          <CustomIconStandalone
            size={"5"}
            className="mb-2 shadow-sm"
            type="button"
            buttonSize="sm"
            color="light-info"
            icon="flaticon2-chart"
            onClick={toggleAction}
          />
        </ul>
      </div>
    </Fragment>
  );
};
export default StickyToggleAction;
