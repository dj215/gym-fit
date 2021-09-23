import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import RestrictedRoutes from "./restrictedRoutes";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Home from "./Home/index";
import Login from "../components/Authentication/login";
import Register from "../components/Authentication/register";
import ForgotPassword from "../components/Authentication/forgotPassword";
import VerificationCode from "../components/Authentication/verificationCode";
import ScrollToTop from "../components/common/scrollToTop";
import AboutUs from "./Pages/AboutUs";
import TermsofUse from "./Pages/Termsofuse";
import PrivacyPolicy from "./Pages/Privacy";
import Help from "./Pages/Help";
import FAQPage from "./Pages/Faq";
const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div>
        <Switch>
          <Route path="/user" component={RestrictedRoutes} />
          {/*<Route
              path="/myChallenges"
              component={RestrictedRoutes}
              exact
            />*/}
          <Route path="/about" component={AboutUs} />
          <Route path="/termsofuse" component={TermsofUse} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/help" component={Help} />
          <Route path="/verifyOtp" component={VerificationCode} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default Routes;
