import React, { useState, useEffect, Fragment } from "react";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import classNames from "classnames";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { menuLink, afterLoginMenuLinks } from "../../assets/data/data";
import AuthActions from "../../redux/auth/actions";
import HeaderWrapper from "./header.style";
import Logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.png";

const { logout } = AuthActions;

const Header = (props) => {
  const { isLogin } = props;
  const [activeId, setActiveId] = useState("challenge");
  const [isOpen, setisopen] = useState(false);

  useEffect(() => {
    if (props.location.pathname !== "/") {
      setActiveId(props.location.pathname.substr(1));
    } else {
      setActiveId("challenge");
    }
  }, [props.location.pathname]);
  const openNav = () => {
    if (isOpen) {
      document.getElementById("mobile").classList.remove("header-color");
      document.getElementById("navMenu").classList.remove("is-active");
      document.getElementById("mySidenav").style.width = "0";
      document.body.style.overflow = "auto";
    } else {
      document.getElementById("mobile").classList.add("header-color");
      document.getElementById("navMenu").classList.add("is-active");
      document.getElementById("mySidenav").style.width = "100%";
      document.body.style.overflow = "hidden";
    }
    setisopen(!isOpen);
  };
  const closeDrawer = () => {
    if (isOpen) {
      document.getElementById("mobile").classList.remove("header-color");
      document.getElementById("navMenu").classList.remove("is-active");
      document.getElementById("mySidenav").style.width = "0";
      document.body.style.overflow = "auto";
    }
    setisopen(!isOpen);
  };
  const handleClick = (menu) => {
    setActiveId(menu.id);
    if (menu.link) {
      props.history.push(menu.link);
    }
  };
  const handleSignOut = () => {
    props.logout();
    props.history.push("/");
  };
  return (
    <HeaderWrapper className="bg-black-light">
      <div className="container-fluid ">
        <div className="d-flex container white-text align-items-center justify-content-between main-header">
          <div>
            <img alt="logo" className="logo img-fluid" src={Logo} />
          </div>
          {isLogin ? (
            <div className="d-flex flex-row-reverse fs-16 ">
              <div className="ml-16 cursor-pointer" id="profileMenu">
                <img src={avatar} alt="profile" className="profile" />
              </div>
              <UncontrolledPopover
                trigger="legacy"
                placement="bottom"
                target="profileMenu"
              >
                <PopoverHeader className="fs-16 black-text">
                  Dishant Desai
                </PopoverHeader>
                <PopoverBody>
                  <div className="profile-menu">My Profile</div>
                  <div className="profile-menu">Edit Profile</div>
                  <div className="profile-menu">Change Password</div>
                  <div className="profile-menu" onClick={handleSignOut}>
                    Logout
                  </div>
                </PopoverBody>
              </UncontrolledPopover>
              {afterLoginMenuLinks.map((menu, i) => {
                return (
                  <div
                    className={classNames("ml-16", "cursor-pointer", {
                      active: activeId === menu.id,
                    })}
                    key={i}
                    onClick={() => handleClick(menu)}
                  >
                    {menu.name}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="d-flex flex-row-reverse fs-16 ">
              {menuLink.map((menu, i) => {
                return (
                  <div
                    className={classNames("ml-16", "cursor-pointer", {
                      active: activeId === menu.id,
                    })}
                    key={i}
                    onClick={() => handleClick(menu)}
                  >
                    {menu.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div id="mobile" className="container-fluid">
        <div className="mobile-header container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img alt="logo" className="logo img-fluid" src={Logo} />
            </div>
            <div className="d-flex align-items-center">
              {isLogin && (
                <Fragment>
                  <div className="mlr-16 cursor-pointer" id="profileMenu">
                    <img src={avatar} alt="profile" className="profile" />
                  </div>
                  <UncontrolledPopover
                    trigger="legacy"
                    placement="bottom"
                    target="profileMenu"
                  >
                    <PopoverHeader className="fs-16 black-text">
                      Dishant Desai
                    </PopoverHeader>
                    <PopoverBody>
                      <div className="profile-menu">
                        <div>My Profile</div>
                        <div className="badge badge-danger">Coming soon</div>
                      </div>
                      <div className="profile-menu">
                        <div>Edit Profile </div>
                        <div className="badge badge-danger">Coming soon</div>
                      </div>
                      <div className="profile-menu">
                        <div>Change Password </div>
                        <div className="badge badge-danger">Coming soon</div>
                      </div>
                      <div className="profile-menu" onClick={handleSignOut}>
                        Logout
                      </div>
                    </PopoverBody>
                  </UncontrolledPopover>
                </Fragment>
              )}
              <button
                id="navMenu"
                className="hamburger hamburger--collapse"
                type="button"
                onClick={openNav}
              >
                <span className="hamburger-box" style={{ marginTop: "5px" }}>
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
            {/*Nav Drawer*/}
            <div id="mySidenav" className="sidenav">
              {isLogin
                ? afterLoginMenuLinks.map((menu, i) => {
                    return (
                      <Link
                        onClick={closeDrawer}
                        to={menu.link}
                        key={`login-${i}`}
                      >
                        {menu.name}
                      </Link>
                    );
                  })
                : menuLink.map((menu, i) => {
                    return (
                      <Link
                        onClick={closeDrawer}
                        to={menu.link}
                        key={`without-login-${i}`}
                      >
                        {menu.name}
                      </Link>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, { logout })
)(Header);
