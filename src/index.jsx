import React from "react";
import ReactDOMClient from "react-dom/client";
import { Wip } from "./screens/Wip";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Wip />);
