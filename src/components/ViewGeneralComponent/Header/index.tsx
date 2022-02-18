import UserMenu from "@/layouts/components/UserMenu";
import { paths } from "@/routes/routeConfig";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Theme } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Fragment, FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles<Theme, HeaderProps>((theme: Theme) => ({
  header_container: {
    background: theme.palette.primary.main,
  },
  header_fixed: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: 99,
  },
  rightUserMenu: {
    [theme.breakpoints.up("lg")]: {
      width: 280,
    },
  },
  menuMobile: {
    width: "250px",
  },
  hoverableInput: {
    position: "absolute",
    right: 0,
    "& .MuiInputBase-root": {
      padding: "8px 1px 8px 10px",
      minHeight: "auto",
    },
    "& input": {
      opacity: 0,
      width: 0,
      visibility: "hidden",
      transition: "width 0.5s ease",
    },
    "&:hover input": {
      opacity: 1,
      width: 200,
      visibility: "visible",
    },
  },
}));
interface HeaderMenuProps {
  className?: string;
  horizontal?: boolean;
}

const HeaderMenu: FunctionComponent<HeaderMenuProps> = (
  props: HeaderMenuProps
) => {
  const { className, horizontal } = props;
  const currentPath = window.location.pathname;
  return (
    <div className="header-menu align-items-stretch">
      <div
        className={clsx(
          "menu menu-lg-rounded menu-column menu-title-white menu-state-title-white menu-state-icon-primary menu-arrow-gray-400 my-5 my-lg-0 align-items-stretch",
          {
            ["menu-lg-row"]: horizontal === true,
          }
        )}
        id="#kt_header_menu"
        data-kt-menu="true"
      >
        <div className="menu-item me-lg-1">
          <a
            className={clsx("menu-link", {
              ["fw-bold"]: paths.Places === currentPath,
            })}
            href={paths.Places}
          >
            <span className="menu-title">Địa điểm</span>
          </a>
        </div>
        <div className="menu-item me-lg-1">
          <a
            className={clsx("menu-link", {
              ["fw-bold"]: paths.PlanTripHomepage === currentPath,
            })}
            href={paths.PlanTripHomepage}
          >
            <span className="menu-title">Chuyến đi</span>
          </a>
        </div>
        <div className="menu-item me-lg-1">
          <a
            className={clsx("menu-link", {
              ["fw-bold"]: paths.Places === currentPath,
            })}
            href="#"
          >
            <span className="menu-title">Lịch trình</span>
          </a>
        </div>
      </div>
    </div>
  );
};
interface HeaderProps {
  className?: string;
  headerFixed?: boolean;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const { className, headerFixed } = props;
  const classes = useStyles(props);
  const currentPath = window.location.pathname;
  const [anchorEl, setAnchorEl] = useState<any>(undefined);

  const {
    register,
    formState,
    handleSubmit,
    watch,
    setValue,
    getValues,
    clearErrors,
    unregister,
    control,
  } = useForm<any>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    defaultValues: {
      field_1: "",
      field_2: null,
      nested: {
        key: "value",
      },
    },
  });

  const watchFields = watch(["field_1", "field_2", "nested.key"]);

  const handleOpenMobileMenu = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  useEffect(() => {}, []);

  console.log("Render...");

  return (
    <Fragment>
      {/*begin::Header*/}
      <div
        id="kt_header"
        style={{ height: 60 }}
        className={clsx(
          "header align-items-stretch pe-2 ps-2 bg-warning",
          classes.header_container,
          className,
          classes.header_fixed
        )}
      >
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center flex-equal">
            <div className="w-lg-65px d-flex align-items-center">
              {/* begin: menu bar - toggle menu mobile */}
              <div className="d-lg-none me-4 ms-2" title="Show aside menu">
                <MenuIcon
                  className="text-white"
                  onClick={(e) => handleOpenMobileMenu(e)}
                />
                <div>
                  <Drawer
                    open={anchorEl ? true : false}
                    onClose={() => setAnchorEl(undefined)}
                  >
                    <div className={classes.menuMobile}>
                      <HeaderMenu horizontal={false} />
                    </div>
                  </Drawer>
                </div>
              </div>
              {/* end:  menu bar - toggle menu mobile*/}
              <div className="pe-3">
                <a href={paths.Home}>
                  <img
                    alt="Logo"
                    src="/media/logos/logo-white.png"
                    className="h-30px"
                  />
                </a>
              </div>
            </div>

            <CustomFreeStyleInput
              className="bg-halo-600 mw-250px ms-8 d-lg-flex d-none text-white"
              disabled={false}
              autoHeight
              circle
              id={`field_1`}
              name={`field_1`}
              placeholder="Tìm kiếm trên Halo"
              startAdornment={
                <InputAdornment position="start">
                  <span className="flaticon-search text-white opacity-50"></span>
                </InputAdornment>
              }
              control={control}
            />
          </div>
          <div className="d-lg-block" id="kt_header_nav_wrapper">
            <HeaderMenu horizontal={true} />
          </div>
          <div className="flex-equal d-flex align-items-center justify-content-end ">
            <div className="align-items-center ms-1 ms-lg-3 d-flex position-relative">
              <CustomIconStandalone
                size="1x"
                darken
                type="button"
                icon="flaticon2-plus"
                onClick={() => {
                  return;
                }}
                circle
                color="warning"
                className="me-2 me-lg-4 d-none d-lg-block"
              />
              <CustomIconStandalone
                size="1x"
                darken
                type="button"
                icon="flaticon2-mail"
                onClick={() => {
                  return;
                }}
                circle
                color="warning"
                className="me-2 me-lg-4 d-none d-lg-block"
              />
              <CustomIconStandalone
                size="1x"
                darken
                type="button"
                icon="flaticon2-bell-3"
                onClick={() => {
                  return;
                }}
                circle
                color="warning"
                className="me-2 me-lg-4 d-none d-lg-block"
              />
              <div className={clsx(classes.hoverableInput, "d-lg-none")}>
                <CustomFreeStyleInput
                  className={clsx("bg-halo-600 mw-250px text-white ")}
                  disabled={false}
                  autoHeight
                  circle
                  id={`field`}
                  name={`field`}
                  placeholder="Tìm kiếm trên Halo"
                  endAdornment={
                    <InputAdornment position="start">
                      <span className="flaticon-search text-white opacity-50"></span>
                    </InputAdornment>
                  }
                  control={control}
                />
              </div>
            </div>
            <div
              className={clsx(
                "d-flex align-items-center ps-2 ps-lg-4 text-white",
                classes.rightUserMenu
              )}
              id="kt_header_user_menu_toggle"
            >
              <UserMenu avatar="https://images.unsplash.com/photo-1633435904321-c57da7093f02?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
            </div>
          </div>
        </div>
      </div>
      {/*end::Header*/}
    </Fragment>
  );
};

export default Header;
