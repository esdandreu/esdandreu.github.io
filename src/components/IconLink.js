import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconLink(props) {
  return (
    <a href={props.href} rel="noopener noreferrer" target="_blank">
      <FontAwesomeIcon className={props.className} icon={props.icon} />
    </a>
  );
}

export default IconLink;
