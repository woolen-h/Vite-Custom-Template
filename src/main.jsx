import React from "react";
import ButtonGroup from "@/ButtonGroup.jsx";
import InputGroup from "@/InputGroup.jsx";
import { StrictMode } from "react";

export const Main = () => {
  return (
    <StrictMode>
      <div className="Main">
        <ButtonGroup />
        <InputGroup />
      </div>
    </StrictMode>
  );
};
