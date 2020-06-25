import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";

// import configureStore from './store';

import * as serviceWorker from "./serviceWorker";
import App from "./App";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import muiTheme from "./theme";
// import history from './history';
import "./index.scss";

import "bootstrap/dist/css/bootstrap.min.css";

// const store = configureStore();

render(
  <AppContainer>
    {/* <Provider store={store} history={history} > */}
    <MuiThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
    {/* </Provider> */}
  </AppContainer>,
  document.getElementById("root")
);

serviceWorker.unregister();
