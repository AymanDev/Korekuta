import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import history from "./history";
import { GAMES_PATH, GAMES_ROUTE, INDEX_PATH } from "./routes";
import styled from "styled-components";
import Menu from "./components/Menu";
import IndexPage from "./pages/IndexPage";
import GamesPage from "./pages/GamesPage";
import NotFoundPage from "./pages/NotFoundPage";
import client from "./utils/apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";

const Wrapper = styled.div`
  height: 100vh;

  background: white;
`;
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Wrapper>
        <Router history={history}>
          <Menu />
          <Switch>
            <Route exact path={INDEX_PATH}>
              <IndexPage />
            </Route>
            <Route exact path={GAMES_ROUTE}>
              <GamesPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </ApolloProvider>
  );
};

export default App;
