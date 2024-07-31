import React from "react";
import ButtonGroup from "@/ButtonGroup.jsx";
import InputGroup from "@/InputGroup.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const container = document.getElementById("root");

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
