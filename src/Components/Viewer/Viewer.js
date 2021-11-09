import "./Viewer.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Viewer(props) {
  let { id } = useParams(),
    array = Object.entries(props.portfolio).map((x) => (x = x[0])),
    length = array.length,
    location = array.indexOf(id),
    prevLink =
      location == 0 ? null : props.portfolio[array[location - 1]].thumbnail,
    nextLink =
      location == length - 1
        ? null
        : props.portfolio[array[location + 1]].thumbnail;

  //Slet index =
  return (
    <div id={"viewer"}>
      <h3>ID: {location}</h3>
      <span>{props.portfolio[id].description}</span>
      {prevLink ? (
        <button id="prev">
          <Link to={prevLink}>{"⬅️"}</Link>
        </button>
      ) : null}
      {nextLink ? (
        <button id="next">
          <Link to={nextLink}>{"➡️"}</Link>
        </button>
      ) : null}
      <iframe title={id} src={props.portfolio[id].link}></iframe>
    </div>
  );
}

export default Viewer;
