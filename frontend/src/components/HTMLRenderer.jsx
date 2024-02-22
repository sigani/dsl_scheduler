import React, { useEffect, useState } from "react";
import { Alert, Button, TextField } from "@mui/material";

function HTMLRenderer() {
  const [htmlContent, setHtmlContent] = useState("");
  const [scheduleName, setScheduleName] = useState("");
  const [errorFetchingFile, setErrorFetchingFile] = useState("");

  function fetchHTML() {
    if (scheduleName.trim() === "") {
      console.error("Schedule name cannot be empty");
      return;
    }
    const fileName = `./src/components/${scheduleName}.html`;
    fetch(fileName)
      .then((response) => {
        if (!response.ok) {
          throw new Error("File not found");
        }
        return response.text();
      })
      .then((data) => setHtmlContent(data))
      .catch((error) => {
        setErrorFetchingFile(error.toString());
        console.log("Type:" + typeof error);
      });
  }

  const handleInputChange = (event) => {
    setScheduleName(event.target.value);
  };

  return (
    <div>
      <div className="button-container">
        <TextField
          id="standard-basic"
          label="Schedule Name"
          onChange={handleInputChange}
          value={scheduleName}
        />
        <Button variant="contained" color="primary" onClick={fetchHTML}>
          Fetch
        </Button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      {errorFetchingFile ? (
        <Alert severity="error">
          There was an error feching the file: {errorFetchingFile}
        </Alert>
      ) : null}
    </div>
  );
}

export default HTMLRenderer;
