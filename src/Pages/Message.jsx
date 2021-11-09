import React, { useState, useEffect,  useQueryClient } from "react";
import { message } from "antd";

const Message = () => {
  const queryClient = useQueryClient();
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       staleTime: Infinity,
  //     },
  //   },
  // });
  const [msg, setMsg] = useState({});
  const [initial, setInitia] = useState(true);

  useEffect(() => {
    if (initial) {
      Initial();
    };
    const websocket = new WebSocket('');
    websocket.onopen = () => {
      console.log('connected')
    };
    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      queryClient.setQueriesData(data.entity, (oldData) => {
        const update = (entity) =>
          entity.id === data.id ? { ...entity, ...data.payload } : entity
        return Array.isArray(oldData) ? oldData.map(update) : update(oldData)
      })
    };
    return () => {
      websocket.close()
    }
  },[queryClient]);
  const Initial = () => {
    setInitia(false);
    if(websocket == null){
      message.error('Can\'t connect to chatroom!,We would retry in 3mins');
    } 
    getData();
  };
   const onOpen = () =>{

  };
   const onError = ()=>{
    const clock = setTimeout(()=>{
      websocket.OPEN();
    },180000);
    return clearTimeout(clock);
  };
  const onMessage=()=>{

  };
  const onClose = ()=>{

  };
  const onSend = (data)=>{

  };
  const getData = () => {
    fetch("", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.code && json.code === 0) {
          setMsg(json.data);
          return;
        }
        throw new Error("network offline!");
      })
      .catch((err) => console.log("Request Failed", err));
  };
  return (
    <div>
      <div>
        <text>Hi</text>
      </div>
    </div>
  );
};

export default Message;
