import React  from "react";
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Message from "./Pages/Message";
import Error from "./Pages/Error";
import UploadPage from "./Pages/Upload";
function App() {
  return (
    <Router>
      <div id={'App'}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/upload">
            <UploadPage />
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
