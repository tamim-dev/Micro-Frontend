import { lazy, Suspense, useState, FunctionComponent } from "react";
import "../assets/styles.css";

const MicroFrontendOneLazy = lazy(() => import("microfrontend1/app"));

export const MicroFrontendOnePage: FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <MicroFrontendOneLazy />
            </Suspense>
        </div>
    );
};
