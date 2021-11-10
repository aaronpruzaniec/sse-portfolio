import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Link to={props.piece.thumbnail}>{props.piece.name}</Link>
    </div>
  );
}

export default Header;
