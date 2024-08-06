import { FunctionComponent, ReactElement } from "react";
import { NavBar } from "./NavBar";

export const Home: FunctionComponent = (): ReactElement => {
    return (
        <div>
            <NavBar />
            <h1>Home</h1>
        </div>
    );
};
