import NavigationLink from "../atoms/NavigationLink";
import { pageRoutes } from "../data/pageRoutes";

import "../styles/navigation/navigation.css";

const Navigation = () => {
    return (
        <nav>
            <ul>
              {pageRoutes.map((route, index) => (
                <li key={index}>
                  <NavigationLink
                    routeName={route.name}
                    routePath={route.path}
                  />
                </li>
              ))}
            </ul>
        </nav>
    );
}

export default Navigation;