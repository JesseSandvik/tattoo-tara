import IconAsLink from "./IconAsLink";

const socialData = require("../data/social-contact.json");

const SideBarTop = () => {
    return (
        <div className="top">
            <ul className="socialIcons">
                {socialData.map((item, index) => (
                    <li key={index}>
                        <IconAsLink
                            linkAddress={item.link}
                            linkIcon={item.icon}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideBarTop;