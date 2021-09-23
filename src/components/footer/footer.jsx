import React from "react";
import { Link } from "react-router-dom";
import FooterWrapper from "./footer.style";
import Logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/socialIcon/facebook@3x.png";
import google from "../../assets/images/socialIcon/google-plus@3x.png";
import twitter from "../../assets/images/socialIcon/twitter@3x.png";
const Footer = () => {
  return (
    <FooterWrapper className="container-fluid bg-black-light mt-auto">
      <div className="container white-text fs-14 py-3">
        <div className="row align-items-center text-center text-sm-left">
          <div className="col-12 col-sm-6 col-lg-4 pa-0">
            <img alt="logo" className="logo" src={Logo} />
          </div>
          <div className="col-12 col-sm-6 col-lg-6 ">
            <div className="row fs-16 ">
              <div className="col-12 col-sm-6">
                <div className="pb-8">
                  <Link
                    to="/privacypolicy"
                    className="white-text"
                    href="#"
                    style={{ marginLeft: "1px" }}
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div className="pb-8">
                  <Link
                    to="/faq"
                    className="white-text"
                    href="#"
                    style={{ marginLeft: "1px" }}
                  >
                    FAQ
                  </Link>
                </div>
                <div className="pb-8">
                  <Link
                    to="/help"
                    className="white-text"
                    href="#"
                    style={{ marginLeft: "1px" }}
                  >
                    Help
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="pb-8">
                  <Link
                    to="/termsofuse"
                    className="white-text"
                    href="#"
                    style={{ marginLeft: "1px" }}
                  >
                    Term of Use
                  </Link>
                </div>
                <div className="pb-8">
                  <Link
                    to="/about"
                    className="white-text"
                    href="#"
                    style={{ marginLeft: "1px" }}
                  >
                    About us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12  col-lg-2">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <button className="flat ml-8">
                <img alt="facebook" src={facebook} className="img-fluid" />
              </button>
              <button className="flat ml-8">
                <img alt="google" src={google} className="img-fluid" />
              </button>
              <button className="flat ml-8">
                <img alt="twitter" src={twitter} className="img-fluid" />
              </button>
            </div>
          </div>
        </div>
        <div className="fs-12 text-center">
          Copyright © 2020 GYM FIT - All Rights Reserved
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
