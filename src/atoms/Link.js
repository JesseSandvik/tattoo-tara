

const Link = ({ linkAddress, linkLabel}) => {
    return (
        <a href={linkAddress} target="_blank" rel="noopener noreferrer">
            {linkLabel}
        </a>
    );
}

export default Link;