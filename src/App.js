import React  from "react";
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home";
import Message from "./Pages/Message";
import Error from "./Pages/Error";
import UploadPage from "./Pages/Upload";
function App() {
  return (
    <Router>
      <div id={'App'} style={{margin:'20vh 20vw',padding:'20px'}}>
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
