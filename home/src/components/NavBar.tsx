import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
// We need to use Chakra UI's <Link> component for consistency with the rest of the UI.
// But we need to use React Router's <Link> component for the routing to work properly.
// So we import Chakra UI's <Link> component, and then import React Router's <Link> component as ReactRouterLink.
// We can then pass the "as" prop to Chakra UI's <Link> component. See: https://chakra-ui.com/docs/components/link/usage#usage-with-routing-library

export const NavBar: FunctionComponent = (): ReactElement => {
    return (
        <div>
            <div style={{ display: "flex", gap: "20px" }}>
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
                <Link to="/setting">Settings</Link>
            </div>
        </div>
    );
};
