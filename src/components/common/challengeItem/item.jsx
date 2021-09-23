import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import StatsBox from "../statsBox";
import ItemWrapper from "./item.style";
import privateIcon from "../../../assets/images/Private.png";
import Button from "../Button";

const Item = (props) => {
  const { challenge, isLogin } = props;
  const handleChallenginfo = () => {
    if (isLogin) {
      props.history.push("/user/challengeInfo", { ...challenge });
    } else {
      props.history.push("/login");
    }
  };
  return (
    <ItemWrapper>
      <div className="row mt-15 ">
        <div className="col-12 text-center text-md-left col-md-2 pa-0">
          <img
            alt="avatar"
            className="challengeImg border-radius-10"
            src={challenge.image}
          />
        </div>
        <div className="col-12 mt-3 mt-md-0 col-md-8 pa-0">
          <div className="text-center text-md-left green-text fs-18 ">
            <span className="cursor-pointer" onClick={handleChallenginfo}>
              {challenge.name}
            </span>
            {isLogin && challenge.isPrivate && (
              <span className="ml-6">
                <img alt="private" className="private-icon" src={privateIcon} />
              </span>
            )}
          </div>
          <div className="justify-content-center justify-content-md-start fs-14 d-flex align-items-center mt-10">
            <span>{challenge.startDate}</span>
            <span className="middle-line bg-orange mx-3  border-radius-10">
              <hr />
            </span>
            <span>{challenge.endDate}</span>
          </div>
          <StatsBox challenge={challenge} />
          {challenge.isRunning && (
            <div className="d-flex justify-content-between mt-25 align-items-center">
              <div className="bg-black-light plr-20 ptb-10 text-center border-radius-5">
                <div className="fs-14">Check In Time</div>
                <div className="green-text fs-20">07:00</div>
              </div>
              <Button
                borderRadius="4px"
                backgroundColor="#ed5a23"
                label={"Check In"}
                style={{ height: "35px", width: "120px" }}
              />
              <div className="bg-black-light plr-20 ptb-10 text-center border-radius-5">
                <div className="fs-14">You can win</div>
                <div className="green-text fs-20">$100</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};
export default compose(withRouter, connect(mapStateToProps))(Item);
