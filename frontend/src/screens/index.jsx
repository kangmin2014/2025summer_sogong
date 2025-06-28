import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LogIn } from "./screens/LogIn";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <LogIn />
  </StrictMode>,
);
