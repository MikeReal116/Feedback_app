import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import { fetchUser } from "../actions";
import './App.css';
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";

function App(props) {

  useEffect(()=>{
    props.fetchUser();
  }, [])


  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component = {Homepage}/>
          <Route path = "/surveys" exact component={Dashboard}/>
      </div>
      </BrowserRouter>
    </div>
  );
}


export default connect(null, { fetchUser })(App);
