import React from "react";
import ButtonGroup from "@/ButtonGroup.jsx";
import InputGroup from "@/InputGroup.jsx";
import { StrictMode } from "react";

function Main() {
  return (
    <StrictMode>
      <div className="Main">
        <ButtonGroup />
        <InputGroup />
      </div>
    </StrictMode>
  );
}

export default Main;
