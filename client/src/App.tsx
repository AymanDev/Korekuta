import React from "react";
import Menu from "./components/menu/Menu";
import NewsFeed from "./components/news-feed/NewsFeed";
import {BrowserRouter, Route} from 'react-router-dom';

import "./App.pcss";
import AnimePage from './components/anime-page/anime-page';
import {ANIME_PAGE_PATH, INDEX_PATH} from './Routes';

export interface AppState {
  sticky: boolean;
}

class App extends React.Component<any, AppState> {
  constructor(props) {
    super(props);

    this.state = {sticky: false};
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({sticky: window.pageYOffset > 60});
  };

  render() {
    return (
      <BrowserRouter>
        <div className="w-full h-full">
          <Menu sticky={this.state.sticky}/>
          <Route exact={true} path={INDEX_PATH} component={NewsFeed}/>
          <Route exact={true} path={ANIME_PAGE_PATH} component={AnimePage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
