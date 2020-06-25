import React from "react";
import { Switch, Route } from "react-router-dom";
import Landingpage from "../components/Landingpage/Landingpage";

const AdminRoutes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Landingpage} />
    </Switch>
  </main>
);

export default AdminRoutes;
