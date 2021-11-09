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
    location = array.indexOf(id);

  //Slet index =
  return (
    <ul>
      <h3>ID: {location}</h3>
      <div id="prev">
        <Link to={props.portfolio[array[location - 1]].thumbnail}>{"<"}</Link>
      </div>
      <div id="next">
        <Link to={props.portfolio[array[location + 1]].thumbnail}>{">"}</Link>
      </div>
      <iframe title={id} src={props.portfolio[id].link}></iframe>
    </ul>
  );
}

export default Viewer;
