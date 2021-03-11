import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Register from "./components/Register";
import ViewEmployee from "./components/ViewEmployee";
import EditEmployee from "./components/EditEmployee";
import ModalLogin from "./components/ModalLogin";


    class App extends Component {
      render(){
        return (
          <Router>
            <div>
              <Navbar />
                <Route exact path="/" component={Landing} />
                <Route path="/register" component={Register} />
                <Route path="/viewemployee/" exact component={ViewEmployee} />
                <Route path="/viewemployee/:msg" component={ViewEmployee} />
                <Route path="/editemployee/:name" component={EditEmployee} />
            </div>
          </Router>
        )
      }
    }
    export default App;
