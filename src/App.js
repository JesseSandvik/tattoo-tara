import Footer from "./organisms/Footer";
import MainHeader from "./organisms/MainHeader";

import "./styles/global/global.css";

const App = () => {
  return (
    <div className="app">
      <div className="template">
        <div className="top">
          <div className="one"></div>
          <div className="two"></div>
          <MainHeader />
        </div>
        <div className="mid">
          <div className="one">
            <div className="i x"></div>
            <div className="i y"></div>
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
        <Footer />
      </div>
    </div>
  );
}

export default App;