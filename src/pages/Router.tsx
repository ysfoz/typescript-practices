
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Values from './Values'
import HomePage from './HomePage'
import Functions from './Functions'
import Classes from './Classes'

function AppRouter() {
    return(
        <Router>
            
            <Switch>
                <Route path='/'  component ={HomePage} exact/>
                <Route path='/values'  component ={Values} exact/>
                <Route path='/functions'  component ={Functions} exact/>
                <Route path='/classes'  component ={Classes} exact/>
            </Switch>
        </Router>
    )
}

export default AppRouter;