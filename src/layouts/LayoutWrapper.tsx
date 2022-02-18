import withTooltip from "@/hocs/withTooltip";
import { LayoutWrapperInterface } from "@/models/interfaces/globalInterface";
import { Fragment, FunctionComponent, ReactNode } from "react";
import MainLayout from "./MainLayout";
interface LayoutWrapperProps extends LayoutWrapperInterface {
  className?: string;
  children: ReactNode;
  wrapperContainer?: boolean;
}

const LayoutWrapper: FunctionComponent<LayoutWrapperProps> = (
  props: LayoutWrapperProps
) => {
  const { layout, children, wrapperContainer } = props;
  // const location = useRouter();
  // useEffect(() => {
  //     setTimeout(() => {
  //         MenuComponent.reinitialization();
  //     }, 500);
  // }, []);

  // useEffect(() => {
  //     setTimeout(() => {
  //         MenuComponent.reinitialization();
  //     }, 500);
  // }, [location.basePath]);

  if (layout === "no-layout") {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <>
      <MainLayout wrapperContainer={wrapperContainer}>{children}</MainLayout>
    </>
  );
};
LayoutWrapper.defaultProps = {
  wrapperContainer: true,
};

export default withTooltip(LayoutWrapper);
