import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "./index.css";
import { Button, TextField } from "@mui/material";
import HTMLRenderer from "./components/HTMLRenderer.jsx";

function App() {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [fetchName, setFetchName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitSchedule = () => {
    setIsLoading(true);
    console.log(title, code);
    fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: title, code: code }),
    })
      .then((res) => {
        setIsLoading(false);
        if (!res.ok) {
          res.text().then((text) => alert(text));
        } else {
          res.text().then((text) => alert(text));
        }
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err);
        console.log(err);
      });
  };

  const fetchTable = () => {
    fetch("http://localhost:3000/fetch?name=" + fetchName, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        alert(JSON.stringify(data, null, 2));
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "100vh", width: "50vw" }}>
        <div className="button-container">
          {isLoading ? <p>SENDING TO SERVER.....</p> : null}
          <TextField
            id="standard-basic"
            label="Schedule Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={submitSchedule}>
            Save
          </Button>
        </div>
        <br />
        <div style={{ flexGrow: 1, border: "1px solid black" }}>
          <CodeMirror
            value={code}
            height="80vh"
            options={{ lineNumbers: true, indentWithTab: true }} // You can add any other options you need
            onChange={(editor) => {
              setCode(editor);
            }}
          />
        </div>
      </div>
      <div style={{ height: "100vh", width: "50vw" }}>
        {/* <HTMLRenderer /> */}
        <TextField
          id="standard-basic"
          label="Schedule Name"
          value={fetchName}
          onChange={(e) => setFetchName(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={fetchTable}>
          Fetch
        </Button>
      </div>
    </div>
  );
}

export default App;
