import React, {useState} from "react";
import Button from "../common/Button";
import OTPInput from "otp-input-react";
import Otp from '../../assets/images/otp.png'
const VerificationCode = () => {
    const [OTP, setOTP] = useState("");
    return (
      <div className="form-wrapper text-center">
        <h2 className="white-text text-uppercase">Verification Code</h2>
        <div className="mt-20">
          <img alt="forgot password" src={Otp} style={{height:'200px'}} />
        </div>
        <div className="white-text fs-14">
            Enter 4 digit code we sent you via email to continue.
        </div>
          <div className="mt-20 ml-5 ml-sm-0">
            <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                className="justify-content-center otp-input-style"
            />
          </div>
        <div className="mt-30">
          <Button backgroundColor="#000" borderColor="#76c047" label={"Verify"} style={{ height: "35px", width: "180px" }} />
        </div>
        <div className="fs-14 white-text mt-15">
            If you didn't receive a code! <span className="green-text">Resend</span>
        </div>
      </div>
    );
  };
  export default VerificationCode;