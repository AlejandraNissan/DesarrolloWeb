//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  useHistory
} from "react-router-dom";
import { Home, About,Dashboard,PostView } from "./components/NewInput";

function App() {
  
  const [users, setUsers] = useState([{ id: 0, name: "Ruben" }]);

  const onClick = () => {
    setUsers([...users, { id: users.length, name: "Ruben" }])
  };  

  var dataComponent = {
    type:"button",
    value:"Update"
  }

  const [date, setDate]=useState(new Date);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        if(seconds+1>59){
          setSeconds(seconds => 0)
          setMinutes(minutes=> minutes + 1)
        }
        else{
        setSeconds(seconds => seconds + 1);
        }

        if(minutes+1>59){
          setMinutes(minutes => 0)
          setHours(hours=> hours + 1)
        }
      }, 1000);
    
    return () => clearInterval(interval);
  })

  useEffect(() => {
    var timerID = setInterval(()=> tick(), 1000)

    return function cleanup(params){
      clearInterval(timerID);
    }
  })

  function tick(){
    setDate(new Date())
  }

  return (
    <div>
      <Router>

        <Link style={{ padding: "30px" }} to="/">Home</Link>

        <Link style={{ padding: "30px" }} to="/about">About</Link>

        <Link style={{ padding: "30px" }} to="/dashboard">Dashboard</Link>

        <Route path="/post/:postId"  component={PostView}/>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>

      </Router>

      {hours}{":"}{minutes}{":"}{seconds}
      <h1>{date.toLocaleTimeString()}</h1>

      <input onClick={onClick} {...dataComponent}/>
      <div>
        {users.map((e) => (
          <div>
            {e.id} - {e.name}
          </div>
        ))}
      </div>
      <input onClick={useHistory().push("/about")}>atras </input>    
    </div>
  );
}

export default App;
