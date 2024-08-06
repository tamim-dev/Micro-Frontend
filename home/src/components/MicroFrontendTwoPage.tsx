import { lazy, Suspense, FunctionComponent } from "react";
import "../assets/styles.css";

const MicroFrontendTwoLazy = lazy(() => import("microfrontend2/app"));

export const MicroFrontendTwoPage: FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <MicroFrontendTwoLazy />
            </Suspense>
        </div>
    );
};
