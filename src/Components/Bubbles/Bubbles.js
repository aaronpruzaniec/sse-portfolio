import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import "./Bubbles.scss";

function Bubbles(props) {
  return <div className={"bubble"}>{props.tag}</div>;
}

export default Bubbles;
