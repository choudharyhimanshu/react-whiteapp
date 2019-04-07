import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './routes/home/Home';
import Example from './routes/example/Example';
import Navbar from './shared/components/Navbar';

import 'semantic-ui-css/semantic.min.css';
import './Helper.css';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <>
                <HashRouter>
                    <Navbar />

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/example' component={Example} />

                        <Redirect to='/'/>
                    </Switch>
                </HashRouter>
            </>
        );
    }
}

export default App;
