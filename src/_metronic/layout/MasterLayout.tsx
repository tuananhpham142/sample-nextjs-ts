import { LayoutWrapperInterface } from "@/models/interfaces/globalInterface";
import { useRouter } from "next/router";
import { Fragment, ReactNode, useEffect } from "react";
import { MenuComponent } from "../assets/ts/components";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { HeaderWrapper } from "./components/header/HeaderWrapper";
import { ScrollTop } from "./components/ScrollTop";
interface LayoutWrapperProps extends LayoutWrapperInterface {
  className?: string;
  children: ReactNode;
}
const MasterLayout = (props: LayoutWrapperProps) => {
  const location = useRouter();
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, [location.pathname]);

  return (
    <Fragment>
      {props.fullHeight && (
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
          }
        `}</style>
      )}
      {props?.layout === "no-layout" ? (
        props.children
      ) : (
        <div className="page d-flex flex-row flex-column-fluid">
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="kt_wrapper"
          >
            <HeaderWrapper />

            <div
              id="kt_content"
              className="content d-flex flex-column flex-column-fluid"
            >
              <div className="post d-flex flex-column-fluid w-100" id="kt_post">
                <Content>{props.children}</Content>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}

      <ScrollTop />
    </Fragment>
  );
};

export { MasterLayout };
