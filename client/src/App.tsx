import '../styles/global.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import history from './history';
import GamesPage from './pages/GamesPage';
import IndexPage from './pages/IndexPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPageController from './pages/RegisterPage/RegisterPageController';
import { GAMES_ROUTE, INDEX_PATH, REGISTER_PATH } from './routes';
import client from './utils/apollo/client';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={history}>
                <Menu />
                <Switch>
                    <Route exact path={INDEX_PATH}>
                        <IndexPage />
                    </Route>
                    <Route exact path={REGISTER_PATH}>
                        <RegisterPageController />
                    </Route>
                    <Route exact path={GAMES_ROUTE}>
                        <GamesPage />
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>
    );
};

export default App;
