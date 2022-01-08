import Icon from "../atoms/Icon";
import Paragraph from "../atoms/Paragraph";

import "../styles/main/main.css";

const Main = () => {
    const boxParaOne = "What I love most about my job is the reaction of my clients after I have finished bringing their ideas to life.";
    const boxParaTwo = "For some, tattoos are done in celebration, some are done in mourning, and some are done just because the client is drawn to the image.";
    const boxParaThree = "Whatever the reason for getting the tattoo done, I am always grateful to be a part of the process.";

    return (
        <main>
            <div className="item one">
                <h1>Miss Tattoo Tara</h1>
                <div className="box">
                    <Paragraph
                        inputText={boxParaOne}
                    />
                    <Paragraph
                        inputText={boxParaTwo}
                    />
                    <Paragraph
                        inputText={boxParaThree}
                    />
                </div>
            </div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </main>
    );
}

export default Main;