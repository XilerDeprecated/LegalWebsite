/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from 'react';

import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

// Pages:
import License from './pages/license';
import TermsOfService from './pages/ToS';

class App extends React.Component {
    render() {
        return (
            <Router basename="/">
                <Switch>
                    <Route exact path="/license" component={License} />
                    <Route exact path="/tos" component={TermsOfService} />
                    <Route exact path='/' component={() => { window.location.href = 'https://prototype.xiler.net'; return null;  }} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}

export default App;
