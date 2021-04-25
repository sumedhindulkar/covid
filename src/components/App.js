import React from 'react'
import {Route, Switch, Link} from "react-router-dom";
import StateLab from "./labs/StateLab"
import TrackCases from "./covidTracker/TrackCases";
import ErrorPage from "./error/ErrorPage"
import "./App.css"

 function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={TrackCases} />
                <Route path="/labs" component={StateLab} />
                <Route component={ErrorPage}/>
            </Switch>
        </div>
    )
}
export default App;