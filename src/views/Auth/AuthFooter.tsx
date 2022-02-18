import CustomTextUrl from "@/components/CustomTextUrl";
import { Fragment, FunctionComponent } from "react";

interface AuthFooterProps {
  className?: string;
}
const AuthFooter: FunctionComponent<AuthFooterProps> = (
  props: AuthFooterProps
) => {
  const { className } = props;

  return (
    <Fragment>
      <div className="d-flex flex-center flex-column-auto p-10">
        <div className="d-flex align-items-center fw-bold fs-6">
          <CustomTextUrl
            variant="body1"
            className="text-hover-primary fw-bold text-white px-2"
            href="https://facebook.com/tuananh1402"
          >
            About
          </CustomTextUrl>
          <CustomTextUrl
            variant="body1"
            className="text-hover-primary fw-bold text-white px-2"
            href="mailto:anhpt@softcom.vn"
          >
            Contact
          </CustomTextUrl>
          <CustomTextUrl
            variant="body1"
            className="text-hover-primary fw-bold text-white px-2"
            href="https://facebook.com/tuananh1402"
          >
            Contact Us
          </CustomTextUrl>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthFooter;
