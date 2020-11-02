import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Home from "../pages/Home";
import New from "../pages/New";
import Edit from "../pages/Edit";
import History from "../pages/History";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nuevo" component={New} />
          <Route exact path="/historial" component={History} />
          <Route exact path="/tarea/:taskId" component={Edit} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
