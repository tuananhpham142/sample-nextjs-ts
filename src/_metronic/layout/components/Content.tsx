import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { DrawerComponent } from "../../assets/ts/components";
import { useLayout } from "../core";

const Content: React.FC = ({ children }) => {
  const { classes } = useLayout();
  const location = useRouter();
  useEffect(() => {
    DrawerComponent.hideAll();
  }, [location]);

  return (
    <div
      id="kt_content_container"
      className={clsx(classes.contentContainer.join(" "))}
    >
      {children}
    </div>
  );
};

export { Content };
