import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function ShowData({ name, id }) {
  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  );
}

export default ShowData;
