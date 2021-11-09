import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Header(props) {
  return (
    <li>
      <Link to={props.piece.thumbnail}>{props.piece.name}</Link>
    </li>
  );
}

export default Header;
