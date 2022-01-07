import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                >
                  portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
        </nav>
    );
}

export default Navigation;