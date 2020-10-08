import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import welcome from './pages/Welcome';

class App extends React.Component{
    render(){
        return(
            <div>   
                <welcome/>
                <test/>
                {this.props.children}
            </div>              
        )
    }
}

ReactDOM.render((
    <Router>
        <Switch>
        <Route path="/" component={App}>
            <Route path="*" component={welcome}/>
        </Route>
        </Switch>
    </Router>
    ),document.body
);