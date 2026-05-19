import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AwardsPage from "./pages/AwardsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AwardsPage />
  </StrictMode>,
);
