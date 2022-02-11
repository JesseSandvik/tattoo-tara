import Footer from "../organisms/Footer";
import MainHeader from "../organisms/MainHeader";
import PageBody from "../organisms/PageBody";

import "../styles/templates/templates.css";

const MainTemplate = ({ children }) => {
    return (
        <div className="mainTemplate">
            <MainHeader />
            <PageBody children={children}/>
            <Footer />
        </div>
    );
}

export default MainTemplate;