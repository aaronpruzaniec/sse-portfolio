import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import "./Item.scss";

function Item(props) {
  let cdn = "https://www.pruzaniec.com/portfolio-non-react/local-cdn/";
  return (
    <div className={"item"}>
      <Link to={props.piece.thumbnail}>
        <img
          alt={props.piece.name}
          src={cdn + props.piece.thumbnail + ".jpg"}
        />
        <h3>{props.piece.name}</h3>
        <p>
          {props.piece.year} - {props.piece.description}
        </p>
      </Link>
    </div>
  );
}

export default Item;
