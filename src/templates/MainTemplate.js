import Footer from "../organisms/Footer";
import MainHeader from "../organisms/MainHeader";
import PageBody from "../organisms/PageBody";

import "../styles/templates/templates.css";

const MainTemplate = () => {
    return (
        <div className="mainTemplate">
            <MainHeader />
            <PageBody />
            <Footer />
        </div>
    );
}

export default MainTemplate;