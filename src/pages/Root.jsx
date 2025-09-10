import { BrowserRouter as Router, Switch, Route 
} from "react-router-dom"

import Home from './Home';
import Cadastro from './Cadastro';
import Login from './Login';
import { StoreProvider } from "../components/Store/Provider";
import RoutesPrivate from "../components/Routes/Private/Private"

const PagesRoot = () => {
    <Router>
        <StoreProvider>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/' component={Home}/>
            </Switch>
        </StoreProvider>
    </Router>
}

export { PagesRoot };