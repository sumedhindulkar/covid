import React from 'react'
import {Route, Switch, Link} from "react-router-dom";
import StateLab from "./labs/StateLab"
import TrackCases from "./covidTracker/TrackCases";
import Hospital from "./hospital/Hospital";
import ErrorPage from "./error/ErrorPage"
import Helpline from "./helpline/Helpline"
import Ngo from "./ngo/Ngo"
import NavBar from "./navbar/NavBar"
import "./App.css"

 function App() {
    return (
        <div>
        <NavBar/>
            <Switch>
                <Route exact path="/" component={TrackCases} />
                <Route exact path="/ngo" component={Ngo} />
                <Route exact path="/helpline" component={Helpline} />
                <Route exact path="/hospital" component={Hospital} />
                <Route path="/labs" component={StateLab} />
                <Route component={ErrorPage}/>
            </Switch>
        </div>
    )
}
export default App;