import { ListActionInterface } from "@/components/CustomBottomDrawer";
import CustomIconStandalone from "@/components/CustomIconStandalone";
import dynamic from "next/dynamic";
import { Fragment, FunctionComponent, useState } from "react";
import { isMobile } from "react-device-detect";
import OutsideClickHandler from "react-outside-click-handler";

const ActionMenu = dynamic(() => import("./ActionMenu"), {
  ssr: false,
});
const CustomBottomDrawer = dynamic(
  () => import("@/components/CustomBottomDrawer"),
  {
    ssr: false,
  }
);

interface ActionMenuButtonProps<T> {
  className?: string;
  actions: Array<ListActionInterface<T>>;
  item: T;
  onClick: (item?: T) => void;
}
const ActionMenuButton: FunctionComponent<ActionMenuButtonProps<any>> = (
  props: ActionMenuButtonProps<any>
) => {
  const { className, actions, item, onClick } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  const handleOpen = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(item);
    setOpen((previousOpen) => !previousOpen);
    setAnchorEl(anchorEl ? null : e?.currentTarget);
  };

  return (
    <Fragment>
      <OutsideClickHandler onOutsideClick={handleClose}>
        <div>
          <CustomIconStandalone
            size="1x"
            icon="flaticon-more-v6"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              handleOpen(e)
            }
            color="dark"
            className="text-hover-primary me-4"
          />
          {isMobile && open ? (
            <CustomBottomDrawer
              list={actions}
              open={open && isMobile}
              onClose={handleClose}
              onOpen={handleOpen}
            />
          ) : (
            <ActionMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              open={open}
            />
          )}
        </div>
      </OutsideClickHandler>
    </Fragment>
  );
};

export default ActionMenuButton;
