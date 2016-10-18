import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';

// Import CSS
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Photogrid from './components/Photogrid';
import Single from './components/Single';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Photogrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));