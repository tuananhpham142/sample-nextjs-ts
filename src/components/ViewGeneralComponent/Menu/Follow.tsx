import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { FunctionComponent } from "react";

const useStyles = makeStyles<Theme, FollowMenuProps>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    borderRadius: "0",
    boxShadow: "none",
  },
}));

interface FollowMenuProps {
  className?: string;
}
const FollowMenu: FunctionComponent<FollowMenuProps> = (
  props: FollowMenuProps
) => {
  const { className } = props;
  const classes = useStyles(props);

  return (
    <div className={clsx("tab-pane pl-3 pr-3", className)}>
      <h5 className="fw-bold mb-5">Theo dõi</h5>
      <CustomSimpleCard
        title="Tên user"
        circle
        // label='Follow'
        subtitle="@di.khap.viet.nam"
        imgUrl="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className="mb-5"
      />
      <CustomSimpleCard
        title="Tên user"
        circle
        // label="Follow"
        subtitle="@di.khap.viet.nam"
        imgUrl="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className="mb-5"
      />
      <CustomSimpleCard
        title="Tên user"
        circle
        // label="Follow"
        subtitle="@di.khap.viet.nam"
        imgUrl="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className="mb-5"
      />
      <CustomButton
        height={100}
        size="md"
        className="w-100"
        onClick={() => {
          console.log("Execute Function");
        }}
        circle={true}
        isLoading={false}
        variant={"outline"}
        color={"light-warning"}
        title={`Thêm bạn bè`}
      />
    </div>
  );
};

export default FollowMenu;
