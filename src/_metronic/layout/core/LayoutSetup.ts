import { localStorageGetItem } from "@/utils/localStorage.utils";
import { DefaultLayoutConfig } from "./DefaultLayoutConfig";
import {
  ILayout,
  ILayoutCSSClasses,
  ILayoutCSSVariables,
  ILayoutHTMLAttributes,
} from "./LayoutModels";

const LAYOUT_CONFIG_KEY =
  process.env.REACT_APP_BASE_LAYOUT_CONFIG_KEY || "LayoutConfig";

export function getLayout(): ILayout {
  const ls = localStorageGetItem(LAYOUT_CONFIG_KEY);
  if (ls) {
    try {
      return JSON.parse(ls) as ILayout;
    } catch (er) {
      console.error(er);
    }
  }
  return DefaultLayoutConfig;
}

function setLayout(config: ILayout): void {
  try {
    localStorage.setItem(LAYOUT_CONFIG_KEY, JSON.stringify(config));
  } catch (er) {
    console.error(er);
  }
}

export function getEmptyCssClasses() {
  return {
    header: [],
    headerContainer: ["container-fluid"],
    headerMobile: [],
    headerMenu: [],
    aside: [],
    asideMenu: [],
    asideToggle: [],
    toolbar: [],
    toolbarContainer: [],
    content: [],
    contentContainer: ["container-xxl"],
    footerContainer: [],
    sidebar: [],
    pageTitle: [],
  };
}

export function getEmptyHTMLAttributes() {
  return {
    asideMenu: new Map(),
    headerMobile: new Map(),
    headerMenu: new Map(),
    headerContainer: new Map(),
    pageTitle: new Map(),
  };
}

export function getEmptyCSSVariables() {
  return {
    body: new Map(),
  };
}

export class LayoutSetup {
  public static isLoaded: boolean = false;
  public static config: ILayout = getLayout();
  public static classes: ILayoutCSSClasses = getEmptyCssClasses();
  public static attributes: ILayoutHTMLAttributes = getEmptyHTMLAttributes();
  public static cssVariables: ILayoutCSSVariables = getEmptyCSSVariables();

  public static setConfig(config: ILayout): void {
    setLayout(config);
  }
}
