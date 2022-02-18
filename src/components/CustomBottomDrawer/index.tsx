import { SwipeableDrawer } from "@mui/material";
import { FunctionComponent } from "react";

export interface ListActionInterface<T> {
  title: string;
  action: (data?: T) => void;
}

interface CustomBottomDrawerProps<T> {
  className?: string;
  list: Array<ListActionInterface<T>>;
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}
const CustomBottomDrawer: FunctionComponent<CustomBottomDrawerProps<any>> = (
  props: CustomBottomDrawerProps<any>
) => {
  const { className, list, open, onClose, onOpen } = props;

  return (
    <SwipeableDrawer
      anchor={"bottom"}
      open={open}
      classes={{
        paper: "p-6 mh-50 border-radius-top-36px",
      }}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div
        className="bullet h-8px w-80px bg-light-dark position-absolute mt-2"
        style={{
          right: "50%",
          transform: "translateX(50%)",
          top: 0,
        }}
      ></div>

      <div className="d-block justify-content-center">
        {list.map((item: ListActionInterface<any>, index: number) => (
          <div
            className="d-flex flex-stack py-4 align-items-center justify-content-center"
            onClick={() => item.action()}
            key={index}
          >
            <div className="d-flex align-items-center">
              <span className="fs-6 text-gray-800 text-hover-primary fw-bolder hoverable">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SwipeableDrawer>
  );
};

export default CustomBottomDrawer;
