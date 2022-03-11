

import "../styles/main/main.css";

const Main = ({ children }) => {

    return (
        <main>
            <div className="item one">
                <h1>Miss Tattoo Tara</h1>
            </div>
            <div className="item two">{children}</div>
        </main>
    );
}

export default Main;