
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Values from './Values'
import HomePage from './HomePage'
import Functions from './Functions'
import Classes from './Classes'
import AbstractClass from './AbstractClass'
import Interface from './Interface'
import Loops from './Loops'
import Generics from './Generics'

function AppRouter() {
    return(
        <Router>
            
            <Switch>
                <Route path='/'  component ={HomePage} exact/>
                <Route path='/values'  component ={Values} exact/>
                <Route path='/functions'  component ={Functions} exact/>
                <Route path='/classes'  component ={Classes} exact/>
                <Route path='/abstractclass'  component ={AbstractClass} exact/>
                <Route path='/interface'  component ={Interface} exact/>
                <Route path='/loops'  component ={Loops} exact/>
                <Route path='/generics'  component ={Generics} exact/>
            </Switch>
        </Router>
    )
}

export default AppRouter;