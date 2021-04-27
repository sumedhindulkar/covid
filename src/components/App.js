import React from 'react'
import {Route, Switch, Link} from "react-router-dom";
import StateLab from "./labs/StateLab"
import TrackCases from "./covidTracker/TrackCases";
import Hospital from "./hospital/Hospital";
import ErrorPage from "./error/ErrorPage"
import Helpline from "./helpline/Helpline"
import "./App.css"

 function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Helpline} />
                <Route exact path="/hospital" component={Hospital} />
                <Route exact path="/cases" component={TrackCases} />
                <Route path="/labs" component={StateLab} />
                <Route component={ErrorPage}/>
            </Switch>
        </div>
    )
}
export default App;