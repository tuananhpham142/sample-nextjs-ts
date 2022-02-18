import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { FunctionComponent } from "react";

const useStyles = makeStyles<Theme, PlaceMenuProps>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    borderRadius: "0",
    boxShadow: "none",
  },
}));

interface PlaceMenuProps {
  className?: string;
}
const PlaceMenu: FunctionComponent<PlaceMenuProps> = (
  props: PlaceMenuProps
) => {
  const { className } = props;
  const classes = useStyles(props);

  return (
    <div className={clsx("tab-pane pl-3 pr-3", className)}>
      <h5 className="fw-bold mb-5">Địa điểm quan tâm</h5>
      <CustomSimpleCard
        title="Hà Nội"
        // label='Save'
        imgUrl="https://images.pexels.com/photos/2977432/pexels-photo-2977432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className="mb-5"
      />
      <CustomSimpleCard
        title="Ninh bình"
        // label='Save'
        imgUrl="https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className="mb-5"
      />
      <CustomSimpleCard
        title="Ăn uống vỉa hè Sài gòn vào mùa hè nóng bức Ăn uống vỉa hè Sài gòn vào mùa hè nóng bức Ăn uống vỉa hè Sài gòn vào mùa hè nóng bức Ăn uống vỉa hè Sài gòn vào mùa hè nóng bức"
        // label='Save'
        imgUrl="https://images.pexels.com/photos/4457107/pexels-photo-4457107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        className="mb-5"
      />
      <CustomButton
        id="sign_in_submit"
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
        title={`Thêm địa điểm`}
      />
    </div>
  );
};

export default PlaceMenu;
