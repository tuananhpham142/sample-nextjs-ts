import React, { FC, Fragment } from "react";

interface IProps {
  onClick: () => void;
}

const Toggle: FC<IProps> = (props) => {
  const { onClick } = props;
  return (
    <Fragment>
      <div className="position-fixed px-2 fw-bolder zindex-2 top-50 mt-10 end-0 transform-90 rounded-top-0">
        <ul className="sticky-toolbar nav flex-row pl-2 pr-2 pt-3 pb-3 mt-4">
          <CustomIconStandalone
            size={"5"}
            className="me-2 shadow-sm transform-270"
            type="button"
            buttonSize="sm"
            color="light-primary"
            icon="flaticon2-open-text-book"
            onClick={() => {}}
          />
          <CustomIconStandalone
            size={"5"}
            className="me-2 shadow-sm transform-270"
            type="button"
            buttonSize="sm"
            color="light-danger"
            icon="flaticon-coins"
            onClick={() => {}}
          />
          <CustomIconStandalone
            size={"5"}
            className="me-2 shadow-sm transform-270"
            type="button"
            buttonSize="sm"
            color="light-warning"
            icon="flaticon2-add-1"
            onClick={() => {}}
          />
          <CustomIconStandalone
            size={"5"}
            className="me-2 shadow-sm transform-270"
            type="button"
            buttonSize="sm"
            color="light-info"
            icon="flaticon-line-graph"
            onClick={() => {}}
          />
        </ul>
      </div>
    </Fragment>
  );
};
export default Toggle;
