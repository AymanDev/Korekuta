import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import { GAMES_ROUTE, INDEX_PATH, REGISTER_PATH } from "./routes";
import styled from "styled-components";
import Menu from "./components/Menu";
import IndexPage from "./pages/IndexPage";
import GamesPage from "./pages/GamesPage";
import NotFoundPage from "./pages/NotFoundPage";
import client from "./utils/apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import RegisterPage from "./pages/RegisterPage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #bccbd0;
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
            <Route exact path={REGISTER_PATH}>
              <RegisterPage />
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
