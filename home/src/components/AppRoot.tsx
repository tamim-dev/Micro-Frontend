import { FunctionComponent, ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { MicroFrontendOnePage } from "./MicroFrontendOnePage";
import { MicroFrontendTwoPage } from "./MicroFrontendTwoPage";

export const AppRoot: FunctionComponent = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="user/*" element={<MicroFrontendOnePage />} />
                <Route path="setting/*" element={<MicroFrontendTwoPage />} />
            </Routes>
        </BrowserRouter>
    );
};
