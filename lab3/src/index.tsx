import { createRoot } from "react-dom/client";
import "typeface-lato";
import App from "./components/App/App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);
