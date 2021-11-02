import React, { useState } from "react";
import { Upload, message, Button } from "antd";
// import { InboxOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";

const UploadPage = () => {
  const [uploading, setUploading] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [fileList, setFileList] = useState([]);
  const uploadData = () => {
    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("msg", msg);
    fileList.forEach((item, index) => formdata.append("file", item));
    setUploading(true);
    fetch("", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-type": "application:/x-www-form-urlencoded:charset=UTF-8",
      },
      body: formdata,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.code && json.code === 0) message.success("Upload success!");
        else message.error("Upload failed!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeFileList = (e) => {
    console.log(e);
  };
  const uploadStatus = (e) => {
    setFileList(e);
    return false;
  };

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        Width: "60vw",
        Height: "40vh",
      }}
    >
      <div>
        <input
          className={"inputLogin"}
          onChange={(value) => setName(value.target.value)}
          placeholder="TRUE NAME"
        />
      </div>
      <div>
        <input
          className={"inputLogin"}
          onChange={(value) => {
            setMsg(value.target.value);
          }}
          placeholder="MSGS YOU WANT TO SAY"
        />
      </div>
      <div style={{ width: "50%" }}>
        <h2 style={{}}> Upload pic</h2>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Upload
            maxCount={1}
            fileList={fileList}
            onRemove={() => setFileList([])}
            beforeUpload={(e) => uploadStatus(e)}
            onChange={(e) => changeFileList(e)}
          >
            <Button icon={<UploadOutlined />}>Select File</Button>
          </Upload>
          <Button
            type="primary"
            onClick={() => uploadData()}
            disabled={fileList.length === 0}
            style={{ marginTop: "2vh" }}
            loading={uploading}
          >
            {uploading ? "Uploading" : "Start Upload"}
          </Button>
        </div>
      </div>
      <button
        style={{
          cursor: "pointer",
          marginTop: "5vh",
          borderRadius: "5px",
          border: "1px solid #fff",
          width: "10rem",
          height: "2rem",
        }}
        disabled={fileList.length === 0}
      >
        CONFIRM
      </button>
    </div>
  );
};

export default UploadPage;
