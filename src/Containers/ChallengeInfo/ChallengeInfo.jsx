import React from "react";
import StatsBox from "../../components/common/statsBox";
import ChallengeWrapper from "./challenge.style";
import Button from "../../components/common/Button";
const ChallengeInfo = (props) => {
  const { state: challenge } = props.location;
  return (
    <ChallengeWrapper className="container mtb-50 ">
      <h2 className="text-center text-uppercase">Challenge Info</h2>
      <div className="row mt-30">
        <div className="col-12 col-lg-5 text-center ">
          <img alt="info" src={challenge.image} className="border-radius-5" />
        </div>
        <div className="col-12 col-lg-7 mt-5 mt-lg-0 ">
          <div className="green-text fs-20 text-uppercase">
            {challenge.name}
          </div>
          <div className="fs-14 d-flex align-items-center justify-content-center  mt-20 mb-30 text-center">
            <span className="ptb-10 plr-16 bg-white border-radius-5">
              <div className="fs-14 black-text">Start</div>
              <div className="fs-16 orange-text">{challenge.startDate}</div>
            </span>
            <span className="middle-line bg-white">
              <hr />
            </span>
            <span className="ptb-10 plr-16 bg-white border-radius-5">
              <div className="fs-14 black-text">End</div>
              <div className="fs-16 orange-text">{challenge.endDate}</div>
            </span>
          </div>
          <StatsBox challenge={challenge} isInfo />

          <div className="mt-25 text-center">
            <p className="fs-14">Daily Gym Check-In By</p>
            <div className="fs-20 green-text ">8:00:00</div>
          </div>
          <div className="d-flex justify-content-between text-center mt-25">
            <div className="bg-white boder-green border-radius-5 ptb-10 plr-16 box-width">
              <div className="fs-14 black-text">Days Per Week</div>
              <div className="fs-16 orange-text">5</div>
            </div>
            <div className="bg-white boder-green border-radius-5 ptb-10 plr-16 box-width">
              <div className="fs-14 black-text">Daily Workout Duration</div>
              <div className="fs-16 orange-text">02:00:00</div>
            </div>
          </div>

          <div className="mt-25">
            <Button
              label="Join Now"
              className="bg-orange white-text border-radius-5"
              style={{ height: "35px", width: "180px" }}
            />
            <Button
              label="Invite Friends"
              className="bg-black-light white-text border-radius-5 mt-10"
              style={{ height: "35px", width: "180px" }}
            />
          </div>
        </div>
      </div>
    </ChallengeWrapper>
  );
};

export default ChallengeInfo;
