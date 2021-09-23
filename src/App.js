import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "react-awesome-slider/dist/styles.css";
import "../node_modules/rc-tabs/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
import "./assets/scss/app.scss";
import GlobalStyle from "./global.style";
import Main from "./Containers/main";
function App() {
  return (
    <div className="vh-100">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
