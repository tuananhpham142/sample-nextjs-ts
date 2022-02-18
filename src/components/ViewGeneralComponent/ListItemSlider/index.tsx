import NextArrow from "@/components/ImageSlider/NextArrow";
import PrevArrow from "@/components/ImageSlider/PrevArrow";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import map from "lodash/map";
import { Fragment, FunctionComponent, ReactNode, useMemo } from "react";
import Swiper from "react-id-swiper";
import { SwiperOptions } from "swiper";
import "swiper/css/swiper.css";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {},
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 700,
    marginTop: theme.spacing(8),
  },
  customSliderItemClasses: {
    flexShrink: 0,
    height: `100%`,
    position: `relative`,
    transitionProperty: `transform, -webkit-transform, -moz-transform`,
  },
  none: {
    "&.swiper-button-prev:after": {
      content: "",
    },
    "&.swiper-button-next:after": {
      content: "",
    },
  },
  // multiRowsPerItems: {
  //     '& .swiper-container-multirow-column > .swiper-wrapper': {
  //         flexDirection: 'row !important',
  //         flexWrap: 'wrap !important',
  //     },
  // },
}));

interface ListItemSliderProps<T> extends SwiperOptions {
  data: T[];
  title?: string;
  render: (item?: T, index?: number) => ReactNode;
  customClass?: string;
  hoverAction?(id?: number): void;
  xs?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
  mobileFreeMode?: boolean;
  freeMode?: boolean;
  spaceBetween?: number;
  slidesPerView?: number | "auto" | undefined;
  slidesPerColumn?: number | undefined;
  slidesPerViewResponsive?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  arrow?: boolean;
}
const ListItemSlider: FunctionComponent<any> = <T extends any>(
  props: ListItemSliderProps<T>
) => {
  const {
    data,
    title,
    render,
    customClass,
    hoverAction,
    xs,
    sm,
    md,
    lg,
    xl,
    slidesPerViewResponsive,
    mobileFreeMode,
    freeMode,
    spaceBetween,
    slidesPerView,
    slidesPerColumn,
    arrow,
    ...propsSwiper
  } = props;
  const classes = useStyles(props);
  const setting = {
    slidesPerView: slidesPerView,
    slidesPerColumn: slidesPerColumn,
    lazy: true,
    freeMode: freeMode,
    spaceBetween: spaceBetween || 8,
    navigation: {
      nextEl: ".flaticon2-right-arrow",
      prevEl: ".flaticon2-left-arrow",
    },
    renderPrevButton: () =>
      arrow && (
        <PrevArrow
          disabled={false}
          size="6"
          buttonSize="xs"
          className={clsx("bg-opacity-50")}
        ></PrevArrow>
      ),
    renderNextButton: () =>
      arrow && (
        <NextArrow
          disabled={false}
          size="6"
          buttonSize="xs"
          className={clsx("bg-opacity-50")}
        ></NextArrow>
      ),
    breakpoints: slidesPerViewResponsive
      ? {
          1440: {
            slidesPerView: slidesPerViewResponsive.xxl,
          },
          1168: {
            slidesPerView: slidesPerViewResponsive.xl,
          },
          768: {
            slidesPerView: slidesPerViewResponsive.lg,
            freeMode: mobileFreeMode,
          },
          640: {
            slidesPerView: slidesPerViewResponsive.md,
            freeMode: mobileFreeMode,
          },
          400: {
            slidesPerView: slidesPerViewResponsive.sm,
            freeMode: mobileFreeMode,
          },
          320: {
            slidesPerView: slidesPerViewResponsive.xs,
            freeMode: mobileFreeMode,
          },
        }
      : undefined,
  };

  const renderItems = useMemo(
    () =>
      map(data, (item: T, index: number) => (
        <div key={index}>{render(item, index)}</div>
      )),
    [data, render]
  );

  return (
    <Fragment>
      <div className={clsx(customClass)}>
        {title && (
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
        )}

        {data && (
          //@ts-ignore
          <Swiper
            {...propsSwiper}
            {...setting}
            slideClass={classes.customSliderItemClasses}
          >
            {renderItems}
          </Swiper>
        )}
      </div>
    </Fragment>
  );
};
ListItemSlider.defaultProps = {
  mobileFreeMode: true,
  arrow: true,
};

export default ListItemSlider;
