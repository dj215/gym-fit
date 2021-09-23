import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import ChallengeInfo from "./ChallengeInfo/ChallengeInfo";
import ComingSoon from "./Pages/ComingSoon";
const RestrictedRoutes = (props) => {
  const { url } = props.match;
  return (
    <ProtectedRoute {...props}>
      <Route exact path={`${url}/challengeInfo`} component={ChallengeInfo} />
      <Route exact path={`${url}/myChallenges`} component={ComingSoon} />
    </ProtectedRoute>
  );
};

const ProtectedRoute = (props) => {
  const { isLogin, children } = props;

  return (
    <div>
      {isLogin ? <Fragment>{children}</Fragment> : <Redirect to="/login" />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};
export default connect(mapStateToProps)(RestrictedRoutes);
