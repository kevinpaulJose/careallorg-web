import { Button } from "@mui/material";
import React, { useState } from "react";
import { localTheme } from "../../theme";

export default function FileUploadPage(props) {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
    console.log(event.target.files[0]);
  };

  return (
    <div>
      <Button
        variant="contained"
        component="label"
        sx={{ backgroundColor: localTheme.activeColor }}
      >
        Upload File
        <input type="file" name="file" hidden onChange={changeHandler} />
      </Button>
      {isSelected ? (
        <span style={{ marginLeft: "10px" }}>
          Filename: {selectedFile.name}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}