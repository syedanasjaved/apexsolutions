"use client";
import React, { useEffect, useReducer } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navData from "../../data/nav.json";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isRightSidebar: false,
  scrollY: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };

    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };

    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    case "TOGGLE_RIGHTSIDEBAR":
      return {
        ...state,
        isRightSidebar: !state.isRightSidebar,
      };

    case "setScrollY":
      return { ...state, scrollY: action.payload };

    default:
      return state;
  }
}

const Header1 = ({ style = "", fluid }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const pathname = usePathname();

  // Scroll event handler
  const handleScroll = () => {
    dispatch({ type: "setScrollY", payload: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menu) => dispatch({ type: "TOGGLE_MENU", menu });
  const toggleSubMenu = (subMenu) =>
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  const toggleSidebar = () => dispatch({ type: "TOGGLE_SIDEBAR" });
  const toggleRightSidebar = () => dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });

  return (
    <>
      {/* =============================== RIGHT SIDEBAR =============================== */}
      <div
        className={`right-sidebar-menu ${
          state.isRightSidebar ? "show-right-menu" : ""
        }`}
      >
        <div className="sidebar-logo-area d-flex justify-content-between align-items-center">
          <div className="sidebar-logo-wrap">
            <Link href="/">
              <img
                src="/assets/img/APX Logo.png"
                alt="logo"
                style={{
                  width: "130px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>
          </div>

          <div className="right-sidebar-close-btn" onClick={toggleRightSidebar}>
            <i className="bi bi-x" />
          </div>
        </div>

        <div className="sidebar-content-wrap">
          <div className="title-area">
            <span>Get In Touch With Us</span>
            <h2>Connect With Apex Surfaces Solution</h2>
            <p>Your Trusted Partner in Marble, Minerals & Engineered Stones.</p>
          </div>

          <ul className="contact-area">
            <li>
              <div className="single-contact">
                <div className="content">
                  <span>CALL ANY TIME</span>
                  <h6>
                    <a href="tel:+922132424292">+92-21-32424292</a>
                  </h6>
                </div>
              </div>
            </li>

            <li>
              <div className="single-contact">
                <div className="content">
                  <span>SAY HELLO</span>
                  <h6>
                    <a href="mailto:info@apexsurfacessolution.com">
                      info@apexsurfacessolution.com
                    </a>
                  </h6>
                </div>
              </div>
            </li>
          </ul>

          <ul className="address-area">
            <li className="single-address">
              <span>Karachi</span>
              <p>Suite 702, Trade Avenue, Hasrat Mohani, Karachi.</p>
            </li>
          </ul>
        </div>

        <div className="sidebar-bottom-area">
          <p>
            Copyright 2025 <Link href="/">apexsurfacessolution</Link>
          </p>
        </div>
      </div>

      {/* =============================== MAIN HEADER =============================== */}
      <header
        className={`header-area style-1 ${style} ${
          state.scrollY > 20 ? "sticky" : ""
        }`}
      >
        <div
          className={`${fluid} d-flex flex-nowrap align-items-center justify-content-between`}
        >
          {/* LOGO */}
          <div className="header-logo">
            <Link href="/">
              <img
                src="/assets/img/APX Logo.png"
                alt="logo"
                style={{
                  width: "85px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>
          </div>

          {/* =============================== NAVIGATION =============================== */}
          <div
            className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}
          >
            {/* MOBILE LOGO */}
            <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
              <div className="mobile-logo-wrap">
                <Link href="/">
                  <img src="/assets/img/apex-icon1.png" alt="" />
                </Link>
              </div>

              <div className="menu-close-btn" onClick={toggleSidebar}>
                <i className="bi bi-x" />
              </div>
            </div>

            {/* ================== MENU LIST ================== */}
            <ul className="menu-list">
              {navData.map((item) => {
                const { id, label, link, icon, subMenu } = item;

                const isActive =
                  (subMenu &&
                    subMenu.some((sub) => sub.link === pathname)) ||
                  link === pathname;

                return (
                  <li
                    key={id}
                    className={`${icon ? "menu-item-has-children" : ""} ${
                      isActive ? "active" : ""
                    }`}
                  >
                    <Link href={link} className="drop-down">
                      {label}
                    </Link>

                    {/* PLUS / DASH ICON */}
                    {icon && (
                      <i
                        onClick={() => toggleMenu(label)}
                        className={`bi bi-${
                          state.activeMenu === label ? "dash" : "plus"
                        } dropdown-icon`}
                      />
                    )}

                    {/* SUBMENU */}
                    {subMenu && (
                      <ul
                        className={`sub-menu ${
                          state.activeMenu === label ? "d-block" : ""
                        }`}
                      >
                        {subMenu.map((sub) => {
                          const isSubActive = sub.link === pathname;

                          return (
                            <li key={sub.id} className={isSubActive ? "active" : ""}>
                              <Link href={sub.link}>{sub.label}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* MOBILE BUTTON */}
            <div className="btn-area d-lg-none d-flex justify-content-center">
              <Link href="/contact" className="primary-btn">
                Start A Project
              </Link>
            </div>
          </div>

          {/* =============================== RIGHT BUTTONS =============================== */}
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            <div className="right-sidebar-button" onClick={toggleRightSidebar}>
              <span>GET IN TOUCH</span>
            </div>

            <Link href="/contact" className="primary-btn d-lg-flex d-none">
              Contact Us
            </Link>

            <div
              className="sidebar-button mobile-menu-btn"
              onClick={toggleSidebar}
            >
              <i className="bi bi-list" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;
