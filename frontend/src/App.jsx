import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import "./index.css";
import {Button, TextField} from "@mui/material";
import HTMLRenderer from "./components/HTMLRenderer.jsx";

function App() {
    return (
        <div style={{display: "flex"}}>
            <div style={{height: "100vh", width: "50vw"}}>
                <div className="button-container">
                    <TextField id="standard-basic" label="Schedule Name"/>
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                </div>
                <br/>
                <CodeMirror
                    height="100%"
                    options={{lineNumbers: true}} // You can add any other options you need
                />
            </div>
            <div style={{height: "100vh", width: "50vw"}}>
                <HTMLRenderer />
            </div>
        </div>
    );
}

export default App;
