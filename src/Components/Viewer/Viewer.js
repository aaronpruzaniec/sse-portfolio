import "./Viewer.css";
import { Link, useParams } from "react-router-dom";

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
      <div id="viewerHeader">
        <span>
          {props.portfolio[id].year} — {props.portfolio[id].description} (
          <Link id="close" to={"/"}>
            Close
          </Link>
          )
        </span>
        {prevLink ? (
          <Link id="prev" to={prevLink}>
            {"< Previous "}({location})
          </Link>
        ) : null}
        {nextLink ? (
          <Link id="next" to={nextLink}>
            ({length - location - 1}){" Next >"}
          </Link>
        ) : null}
      </div>
      <iframe title={id} src={props.portfolio[id].link}></iframe>
    </div>
  );
}

export default Viewer;
