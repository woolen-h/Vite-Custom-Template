import React from "react";
import ButtonGroup from "@/ButtonGroup.js";
import InputGroup from "@/InputGroup.js";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(
    <StrictMode>
      <div className="Main">
        <ButtonGroup />
        <InputGroup />
      </div>
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
