import "./App.scss";
import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Data from "./Data/List.json";
import Prices from "./Prices";
import About from "./About";
import ClientDetails from "./ClientDetails";

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
      <Router>
        <div>
          <Link to="/">PRICES CLICK</Link>
          <br></br>

          <Link to="/about">ABOUT CLICK</Link>
        </div>

        <Switch>
          <Route path="/" exact>
            <Prices />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/client/:id">
            <ClientDetails />
          </Route>
        </Switch>
      </Router>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div>
            <ShowData key={item.id} id={item.id} name={item.lastName} />
            <br></br>
          </div>
        ))}
    </div>
  );
}

export default App;
/*
function Zobrazeni() {
  const { id } = useParams();
  return <h1>id: {id}</h1>;
}

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
