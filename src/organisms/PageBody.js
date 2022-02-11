import Main from "./Main";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";

import "../styles/pageBody/pageBody.css";

const PageBody = ({ children }) => {
    return (
        <section>
          <SideBarLeft />
          <Main children={children} />
          <SideBarRight />
        </section>
    );
}

export default PageBody;