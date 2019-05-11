import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Grid, Loader} from 'semantic-ui-react';

import Home from './routes/home/Home';
import Login from './routes/login/Login';
import Example from './routes/example/Example';
import Navbar from './shared/components/Navbar';
import ProtectedRoute from './shared/components/ProtectedRoute';

import {GlobalContext, IGlobalContext} from './shared/contexts/global.context';
import authService from './shared/services/auth.service';

import 'semantic-ui-css/semantic.min.css';
import './shared/css/Helper.css';
import './App.css';


interface IAppState {
    isAuthorizing: boolean;
    globalContext: IGlobalContext;
}

class App extends React.Component<{}, IAppState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            isAuthorizing: false,
            globalContext: {}
        };

        this.authorize = this.authorize.bind(this);
    }

    authorize(): void {
        this.setState({isAuthorizing: true}, () => {
            authService.getUserInfo().then(userInfo => {
                this.setState(prevState => {
                    const globalContext = prevState.globalContext;
                    globalContext.userInfo = userInfo;
                    return {
                        isAuthorizing: false,
                        globalContext
                    };
                });
            }).catch(error => {
                this.setState({
                    isAuthorizing: false
                });
            });
        });
    }

    componentDidMount() {
        this.authorize();
    }

    render() {
        const {isAuthorizing, globalContext} = this.state;

        if (isAuthorizing) {
            return(
                <Grid textAlign='center' verticalAlign='middle' className='p-0 m-0'
                      style={{position: 'absolute', width: '100%', height: '100%'}}>
                    <Loader size='big' active>Loading</Loader>
                </Grid>
            );
        }

        return (
            <>
                <GlobalContext.Provider value={globalContext}>
                    <HashRouter>
                        <Navbar />

                        <Switch>
                            <ProtectedRoute exact path='/' component={Home} />
                            <Route exact path='/login' render={(props) => <Login {...props} onLogin={this.authorize}/>} />
                            <ProtectedRoute exact path='/example' component={Example} />

                            <Redirect to='/'/>
                        </Switch>
                    </HashRouter>
                </GlobalContext.Provider>
            </>
        );
    }
}

export default App;
