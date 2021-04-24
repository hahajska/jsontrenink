import React from "react";

function Random({ name, id }) {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{id}</li>
      </ul>
    </div>
  );
}

export default Random;
