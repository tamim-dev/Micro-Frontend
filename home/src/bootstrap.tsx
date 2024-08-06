import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppRoot } from "./components/AppRoot";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
    <StrictMode>
        <AppRoot />
    </StrictMode>
);
