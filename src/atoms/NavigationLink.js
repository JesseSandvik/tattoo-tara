import { NavLink } from "react-router-dom";

const NavigationLink = ({ routeName, routePath }) => {
    return <NavLink
                className={(navData) => navData.isActive ? "active" : ""}
                to={routePath}
        >
            {routeName}
        </NavLink>
}

export default NavigationLink;