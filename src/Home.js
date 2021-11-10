import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "./App";
import Home from './Front';
import Register from "./Register";

function Main()
{
    return(
        <>
         <Router>
         <Switch>
             <Route exact path='/'>
                 <Home />
             </Route>

             <Route exact path = '/search'>
                 <App />
             </Route>

             <Route exact path = '/register'>
                 <Register />
             </Route>

         </Switch>
         </Router>
         </>
         
    );
}

export default Main;