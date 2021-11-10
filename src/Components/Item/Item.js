import { Link } from "react-router-dom";
import Bubbles from "../Bubbles/Bubbles";

import "./Item.scss";

function Item(props) {
  const cdn = "https://www.pruzaniec.com/portfolio-non-react/local-cdn/";
  return (
    <div className={"item"}>
      <Link to={props.piece.thumbnail}>
        <div className={"imgOuter"}>
          <img
            alt={props.piece.name}
            src={cdn + props.piece.thumbnail + ".jpg"}
          />
        </div>
        <h3>{props.piece.name}</h3>
        <p>
          {props.piece.year} — {props.piece.description}
        </p>
        <div className={"bubbles"}>
          {props.piece.tags.map((tag) => (
            <Bubbles tag={tag} />
          ))}
        </div>
      </Link>
    </div>
  );
}

export default Item;
