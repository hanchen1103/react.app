import React, { useState } from "react";
import "./home.css";
import { useHistory } from "react-router-dom";
const Home = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  const updatePwd = (e) => {
    setPwd(e.target.value);
  };
  const loginNow = () => {
    let data = {
      name: username,
      password: pwd,
    };
    console.log(data);
    fetch("", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-type": "application:/x-www-form-urlencoded:charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.code && json.code === 0) {
          history.push("/message");
          return;
        }
        history.push("/err");
      })
      .catch((err) => console.log("Request Failed", err));
  };
  return (
    <div className={"mainContainerContent"}>
      
      <h3 style={{ alignSelf: "flex-start", marginLeft: "19vw" }}> Username</h3>
      <input
        className={"inputLogin"}
        placeholder="USERNAME"
        onChange={(value) => updateUsername(value)}
      />
      <h3
        style={{
          alignSelf: "flex-start",
          marginLeft: "19vw",
          marginTop: "5vh",
        }}
      >
        Password
      </h3>
      <input
        className={"inputLogin"}
        placeholder="PASSWORD"
        onChange={(value) => updatePwd(value)}
      />
      <button className={"inputLoginBtn"} onClick={() => loginNow()}>
        LOGIN
      </button>
    </div>
  );
};

export default Home;
