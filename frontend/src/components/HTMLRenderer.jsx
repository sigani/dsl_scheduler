import React, { useEffect, useState } from 'react';
import {Button, TextField} from "@mui/material";



function HTMLRenderer() {
    const [htmlContent, setHtmlContent] = useState('');

    function fetchHTML() {
        fetch("./src/components/output.html")
            .then(response => response.text())
            .then(data => setHtmlContent(data))
            .catch(error => {
                console.error('Error fetching HTML file:', error);
            });
    }

    return (
        <div>
            <div className="button-container">
                <TextField id="standard-basic" label="Schedule Name"/>
                <Button variant="contained" color="primary" onClick={fetchHTML}>Fetch</Button>
            </div>
            <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
        </div>
    );
}

export default HTMLRenderer;
