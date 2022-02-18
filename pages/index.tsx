import MetaHeader from "@/components/MetaHeader";
import { LayoutWrapperInterface } from "@/models/interfaces/globalInterface";
import { wrapper } from "@/store/redux";
import HomeComponent from "@/views/Home";
import { GetStaticProps, NextPage } from "next";
import { Fragment } from "react";

interface HomepageProps {}
const Homepage: NextPage<HomepageProps> = (props: HomepageProps) => {
  return (
    <Fragment>
      <MetaHeader
        title={`List place`}
        description={"Meta description"}
        image={"Meta image"}
        url={`Meta url`}
      />
      <HomeComponent />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({}) => {
      const layoutProps: LayoutWrapperInterface = {
        layout: "default",
        fullHeight: true,
      };
      return {
        props: {
          pageProps: {},
          layoutProps,
        },
      };
    }
);

export default Homepage;
