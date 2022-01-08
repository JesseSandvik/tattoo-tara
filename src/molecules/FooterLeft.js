import Paragraph from "../atoms/Paragraph";

const FooterLeft = () => {
    return (
        <div className="left">
            &copy;
            <Paragraph
                inputText={"Body Designs Studio 2022"}
            />
        </div>
    );
}

export default FooterLeft;