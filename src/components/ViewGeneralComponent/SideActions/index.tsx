/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import CustomIconStandalone from "@/components/CustomIconStandalone";
import clsx from "clsx";
import React, { Fragment, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Toggle from "./Toggle";

export function ExploreDrawer() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Fragment>
      <Toggle onClick={() => setShow(true)} />
      {show && <div className="drawer-overlay" style={{ zIndex: 109 }}></div>}
      {/* begin::Explore drawer */}
      {show && (
        <OutsideClickHandler onOutsideClick={() => setShow(false)}>
          <div
            id="kt_explore"
            className={clsx({
              ["bg-body drawer drawer-end drawer-on shadow-xs"]: show,
            })}
            data-kt-drawer="true"
            data-kt-drawer-name="explore"
            data-kt-drawer-activate="true"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
            data-kt-drawer-direction="end"
            data-kt-drawer-toggle="#kt_explore_toggle"
            data-kt-drawer-close="#kt_explore_close"
          >
            {/* begin::Card  */}
            <div className="card shadow-none w-100">
              {/* begin::Header */}
              <div className="card-header" id="kt_explore_header">
                <h5 className="card-title fw-bold text-gray-600">Explore</h5>

                <div className="card-toolbar">
                  <CustomIconStandalone
                    size={"4"}
                    icon="flaticon2-cross"
                    onClick={() => setShow(false)}
                    className="text-hover-danger"
                  />
                </div>
              </div>
              {/* end::Header */}
              {/* begin::Body */}
              <div className="card-body" id="kt_explore_body">
                {/* begin::Content */}
                <div
                  id="kt_explore_scroll"
                  className="scroll-y me-n5 pe-5"
                  data-kt-scroll="true"
                  data-kt-scroll-height="auto"
                  data-kt-scroll-wrappers="#kt_explore_body"
                  data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer"
                  data-kt-scroll-offset="5px"
                >
                  <div className="mb-7">
                    <div className="d-flex flex-stack">
                      <h3 className="mb-0">
                        {process.env.REACT_APP_THEME_NAME} Licenses
                      </h3>

                      <a
                        href="https://themeforest.net/licenses/standard"
                        className="fw-bold"
                      >
                        License FAQs
                      </a>
                    </div>
                  </div>

                  <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                    <div className="d-flex flex-stack">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-1">
                          <div className="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">
                            Regular License
                          </div>

                          <i
                            className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                            data-bs-toggle="popover"
                            data-bs-custom-className="popover-dark"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-content="Use, by you or one client in a single end product which end users are not charged for."
                          ></i>
                        </div>
                        <div className="fs-7 text-muted">
                          For single end product used by you or one client
                        </div>
                      </div>

                      <div className="text-nowrap">
                        <span className="text-muted fs-7 fw-bold">$</span>
                        <span className="text-dark fs-1 fw-bolder">39</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                    <div className="d-flex flex-stack">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-1">
                          <div className="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">
                            Extended License
                          </div>

                          <i
                            className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                            data-bs-toggle="popover"
                            data-bs-custom-className="popover-dark"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-content="Use, by you or one client, in a single end product which end users can be charged for."
                          ></i>
                        </div>
                        <div className="fs-7 text-muted">
                          For single end product with paying users.
                        </div>
                      </div>

                      <div className="text-nowrap">
                        <span className="text-muted fs-7 fw-bold">$</span>
                        <span className="text-dark fs-1 fw-bolder">939</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                    <div className="d-flex flex-stack">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-1">
                          <div className="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">
                            Custom License
                          </div>
                        </div>
                        <div className="fs-7 text-muted">
                          Reach us for custom license offers.
                        </div>
                      </div>

                      <div className="text-nowrap">
                        <a
                          href="https://keenthemes.com/contact/"
                          className="btn btn-sm btn-success"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>

                  <a
                    href={process.env.REACT_APP_PURCHASE_URL}
                    className="btn btn-primary mb-15 w-100"
                  >
                    Buy Now
                  </a>
                </div>
                {/* end::Content */}
              </div>
              {/* end::Body */}
            </div>
            {/* begin::Card */}
          </div>
        </OutsideClickHandler>
      )}
      {/* end::Explore drawer */}
    </Fragment>
  );
}
