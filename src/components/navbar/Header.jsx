import React, { useEffect, useRef, useState } from "react";
import { Container, Button } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const nav_links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // 🔹 Temporary auth state (replace later with real auth)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("User");

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  // Sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("stickey__header");
      } else {
        headerRef.current?.classList.remove("stickey__header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () =>
    menuRef.current?.classList.toggle("show__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container fluid className="px-0">
        <div className="nav_wrapper d-flex align-items-center justify-content-between">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Logo" className="logoImg" />
          </div>

          {/* Navigation */}
          <div className="navigation" ref={menuRef}>
            <ul className="menu d-flex align-items-center gap-5">
              {nav_links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active__link" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right buttons */}
          <div className="nav_right d-flex align-items-center gap-4">
            {isLoggedIn ? (
              <>
                <h5 className="mb-0 btn primary__btn">
                  {username}
                </h5>
                <Button className="btn btn-dark" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="btn secondary__btn"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>

                <Button
                  className="btn primary__btn"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </>
            )}

            {/* Mobile menu icon */}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
