import React from "react";
import { Input } from "reactstrap";
import EmailIcon from "../../assets/images/Email.png";
import Button from "../common/Button";
import ForgotPass from '../../assets/images/ForgotPass.png'
const ForgotPassword = () => {
  return (
    <div className="form-wrapper text-center">
      <h2 className="white-text text-uppercase">Forgot Password</h2>
      <div className="mt-20">
        <img alt="forgot password" className="forgot-pass-image" src={ForgotPass} />
      </div>
      <div className="row  mt-30">
        <div className="col-12 pa-0">
          <Input type="email" name="email" id="email" placeholder="Email" />
          <img alt="email" className="input-icon" src={EmailIcon} />
        </div>
      </div>
      <div className="mt-48">
        <Button backgroundColor="#000" borderColor="#76c047" label={"Done"} style={{ height: "35px", width: "180px" }} />
      </div>
    </div>
  );
};
export default ForgotPassword;
