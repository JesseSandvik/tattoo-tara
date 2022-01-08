import Icon from "../atoms/Icon";
import Link from "../atoms/Link";

const IconAsLink = ({ linkAddress, linkIcon }) => {
    return (
        <Link
            linkAddress={linkAddress}
            linkLabel={<Icon iconClassName={linkIcon}/>}
        />
    );
}

export default IconAsLink;