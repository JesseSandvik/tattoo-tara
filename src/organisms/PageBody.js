import Main from "./Main";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";

import "../styles/pageBody/pageBody.css";

const PageBody = () => {
    return (
        <section>
          <SideBarLeft />
          <Main />
          <SideBarRight />
        </section>
    );
}

export default PageBody;