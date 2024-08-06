// This is only used for independent development of the microfrontend.
// It is not used when the microfrontend is loaded by the host application.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PlaygroundContainer from './components/Playground';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
      <PlaygroundContainer />
  </StrictMode>
);
