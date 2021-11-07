import React, { useState, useEffect } from "react";

const Message = () => {
  const [msg, setMsg] = useState({});
  const [initial, setInitia] = useState(true);
  useEffect(() => {
    if (initial) {
      Initial();
    }
  });
  const Initial = () => {
    setInitia(false);
    getData();
  };
  const getData = () => {
    fetch("", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if(json.code && json.code === 0){
            setMsg(json.data);
            return;
        }
        throw new Error('network offline!');
    })
      .catch((err) => console.log("Request Failed", err));
  };
  return (
  <div>
      <div >
          <text>{msg.content}</text>
      </div>
      {msg}
  </div>
  );
};

export default Message;
