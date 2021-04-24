import "./App.scss";
import React, { useState, useEffect } from "react";

/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Data from "./Data/List.json";
import Prices from "./Prices";
import About from "./About";
import ClientDetails from "./ClientDetails"; */

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {data && data.length > 0 && data.map((item) => <p>{item.lastName}</p>)}
    </div>
  );
}

export default App;
/*
function Zobrazeni() {
  const { id } = useParams();
  return <h1>id: {id}</h1>;
}

function App() {
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
        <Router>
      <div>
        <Link to="/">Prices</Link>
        <br></br>

        <Link to="/about">About</Link>
      </div>

      <Switch>
        <Route path="/" exact>
          <Prices />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/client/:id" exact>
          <ClientDetails />
        </Route>
      </Switch>
    </Router>
    
 <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
*/
