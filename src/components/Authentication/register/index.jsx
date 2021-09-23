import React from "react";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import EmailIcon from "../../../assets/images/Email.png";
import PasswordIcon from "../../../assets/images/Password.png";
import Button from "../../common/Button";
import facebook from "../../../assets/images/socialIcon/facebook@3x.png";
import google from "../../../assets/images/socialIcon/google-plus@3x.png";
const Register = (props) => {
  return (
    <div className="form-wrapper text-center overflow-auto">
      <h2 className="white-text text-uppercase">Register</h2>
      <div className="row  mt-30">
        <div className="col-12 pa-0">
          <Input type="email" name="email" id="email" placeholder="Email" />
          <img alt="email" className="input-icon" src={EmailIcon} />
        </div>
        <div className="col-12 mt-24 pa-0">
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <img alt="password" className="input-icon" src={PasswordIcon} />
        </div>
        <div className="col-12 mt-24 pa-0">
          <Input
            type="password"
            name="confpassword"
            id="confpassword"
            placeholder="Confirm Password"
          />
          <img alt="password" className="input-icon" src={PasswordIcon} />
        </div>
      </div>
      <div className="mt-48">
        <Button
          backgroundColor="#000"
          borderColor="#76c047"
          label={"Register"}
          style={{ height: "35px", width: "180px" }}
        />
      </div>
      <div className="white-text mt-4 fs-12">OR</div>
      <div className="justify-content-center  d-flex mt-24">
        <img alt="facebook" className="socila-media-icon" src={facebook} />
        <img alt="gmail" className="socila-media-icon ml-48" src={google} />
      </div>
      <div className="fs-12 white-text mt-3 mt-md-3">
        By registering you agree to the
        <Link className="green-text ml-3" to="">
          terms of use
        </Link>
      </div>
    </div>
  );
};
export default Register;
