import React from "react";
import {Link, withRouter} from 'react-router-dom'
import { Input } from "reactstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import AuthActions from "../../../redux/auth/actions";
import EmailIcon from "../../../assets/images/Email.png";
import PasswordIcon from "../../../assets/images/Password.png";
import Button from "../../common/Button";
import facebook from "../../../assets/images/socialIcon/facebook@3x.png";
import google from "../../../assets/images/socialIcon/google-plus@3x.png";

const { login } = AuthActions;

const Login = (props) => {
  const handleLogin = () => {
    const data = {
      accessToken:'accessToken'
    }
    props.login(data)
    props.history.push('/')
  }
  return (
    <div className="form-wrapper text-center">
       <h2 className="white-text text-uppercase">Login</h2>
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
        <div className="col-12 fs-14 green-text text-right pa-0 mt-8 cursor-pointer" onClick={() => props.history.push('/forgotPassword')}>
          Forgot Password?
        </div>
      </div>
      <div className="mt-48">
        <Button className="bg-black" borderColor="#76c047" onClick={handleLogin} label={"Login"} style={{ height: "35px", width: "180px" }} />
      </div>
      <div className="white-text mt-24 fs-12">OR</div>
      <div className="justify-content-center  d-flex mt-24">
        <img alt="facebook" className="socila-media-icon" src={facebook} />
        <img alt="gmail" className="socila-media-icon ml-48" src={google} />
      </div>
      <div className="fs-12 white-text mt-16  ">
        Don't have account?{" "}
        <Link to="/register" className="green-text ml-1" href="#">
          Register
        </Link>
      </div>
    </div>
  );
};
export default compose(withRouter,connect(null, { login }))(Login);
