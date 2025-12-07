"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/*====== NAVBAR NINE PART START ======*/}
      <section
        className={clsx(
          "navbar-area navbar-nine",
          isScrolled &&
            "bg-teal-500/45 backdrop-blur-10 supports-backdrop-blur:bg-teal-500/45 supports-backdrop-blur:backdrop-blur-10 border-b border-teal-300 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] fixed",
          "",
        )}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a
                  className="navbar-brand"
                  href="#hero-area"
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <img
                    style={{ width: "48px" }}
                    src="/assets/images/logo-dark.png"
                    alt="#"
                  />
                  <span style={{ color: "white" }}>FullCircle</span>
                </a>
                <button
                  className={clsx(
                    "navbar-toggler hidden",
                    isNavbarOpen && "active",
                  )}
                  type="button"
                  onClick={toggleNavbar}
                  aria-controls="navbarNine"
                  aria-expanded={isNavbarOpen}
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className={clsx(
                    "collapse navbar-collapse sub-menu-bar",
                    isNavbarOpen && "show",
                  )}
                  id="navbarNine"
                >
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a
                        className="page-scroll active"
                        href="#hero-area"
                        onClick={() => setIsNavbarOpen(false)}
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="page-scroll"
                        href="#get-started"
                        onClick={() => setIsNavbarOpen(false)}
                      >
                        Get Started
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="page-scroll"
                        href="#services"
                        onClick={() => setIsNavbarOpen(false)}
                      >
                        Services
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="navbar-btn d-none d-lg-inline-block hidden">
                  <a
                    className="menu-bar"
                    href="#side-menu-left"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSidebar();
                    }}
                  >
                    <i className="lni lni-menu"></i>
                  </a>
                </div>
              </nav>
              {/* navbar */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </section>
      {/*====== NAVBAR NINE PART ENDS ======*/}

      {/*====== SIDEBAR PART START ======*/}
      <div className={clsx("sidebar-left", isSidebarOpen && "open")}>
        <div className="sidebar-close">
          <a
            className="close"
            href="#close"
            onClick={(e) => {
              e.preventDefault();
              closeSidebar();
            }}
          >
            <i className="lni lni-close"></i>
          </a>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-logo">
            <a href="#home">
              <span
                style={{
                  display: "inline-grid",
                  placeItems: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "var(--teal-700)",
                  color: "white",
                  fontWeight: "800",
                  fontSize: "16px",
                }}
              >
                FC
              </span>
              <div
                style={{
                  color: "var(--teal-900)",
                  fontWeight: "700",
                  marginTop: "8px",
                }}
              >
                FullCircle
              </div>
            </a>
          </div>
          <p className="text">
            Connecting neighbors and helpers for everyday tasks - errands,
            companionship, odd jobs and more.
          </p>
          {/* logo */}
          <div className="sidebar-menu">
            <h5 className="menu-title">Quick Links</h5>
            <ul>
              <li>
                <a href="#how" className="nav-link" onClick={closeSidebar}>
                  How it works
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link" onClick={closeSidebar}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link" onClick={closeSidebar}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* menu */}
          <div className="sidebar-social align-items-center justify-content-center">
            <h5 className="social-title">Follow Us On</h5>
            <ul>
              <li>
                <a href="https://wa.me/919121346777" target="_blank">
                  <i className="lni lni-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-phone"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* sidebar social */}
        </div>
        {/* content */}
      </div>
      <div
        className={clsx("overlay-left", isSidebarOpen && "open")}
        onClick={closeSidebar}
      ></div>
      {/*====== SIDEBAR PART ENDS ======*/}
    </>
  );
}
