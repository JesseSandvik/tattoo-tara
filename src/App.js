import { NavLink } from "react-router-dom";

import "./styles/global/global.css";

const App = () => {
  return (
    <div className="app">
      <div className="template">
        <div className="top">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three">
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
        </div>
        </div>
        <div className="mid">
          <div className="one">
            <div className="i x"></div>
            <div className="i y">
            </div>
          </div>
          <div className="two"></div>
          <div className="three">
            <div className="x">
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fas fa-envelope-square"></i>
            </div>
            <div className="y"></div>
          </div>
        </div>
        <div className="bot">
          <div className="one">
            <p>&copy; Body Designs Studio 2022</p>
          </div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
    </div>
  );
}

export default App;