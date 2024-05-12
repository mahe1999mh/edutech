import React from "react";
import { TextField, Stack } from "@mui/material";

interface InputProps {
  label: string;
  value?: string;
  type: string;
  style?:Object;
  size?:string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  size,
  style,
  ...rest
}) => {
  return (
    <>
      <div style={style}>
        <Stack justifyContent={"space-between"}>
          {label && <span style={{ position: "relative" }}> {label}</span>}
        </Stack>
        <TextField type={type} value={value} size={size} {...rest} />
      </div>
    </>
  );
};

export default Input;
