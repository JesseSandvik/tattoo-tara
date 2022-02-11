import { Routes, Route } from "react-router-dom";
import { pageRoutes } from "./data/pageRoutes";
import "./styles/global/global.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        {pageRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;