import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Item() {
  let { id } = useParams();
  return (
    <ul>
      <h3>ID: {id}</h3>
    </ul>
  );
}

export default Item;
