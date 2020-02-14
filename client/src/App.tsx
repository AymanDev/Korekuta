import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import history from "./history";
import { ANIME_PAGE_PATH, INDEX_PATH } from "./Routes";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path={INDEX_PATH}>
            index
          </Route>
          <Route exact path={ANIME_PAGE_PATH}>
            anime
          </Route>
          <Route>404</Route>
        </Switch>

        <ul>
          <li>
            <Link to={INDEX_PATH}>Index</Link>
          </li>
          <li>
            <Link to={ANIME_PAGE_PATH}>Anime</Link>
          </li>
          <li>
            <Link to={"/error"}>404</Link>
          </li>
        </ul>
      </Router>
    </div>
  );
};

export default App;
