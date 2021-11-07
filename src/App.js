import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import Message from "./Pages/Message.jsx";
import Error from "./Pages/Error.jsx";
import UploadPage from "./Pages/Upload.jsx";
import Test from "./Pages/Test.jsx";
function App() {
  return (
    <Router>
      <div id={"App"}>
        <div id={"AppBack"} />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/upload">
            <UploadPage />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
