import React from "react";
import Menu from "./components/menu/Menu";
import NewsFeed from "./components/news-feed/NewsFeed";

import "./App.pcss";

export interface AppState {
  sticky: boolean;
}

class App extends React.Component<any, AppState> {
  constructor(props) {
    super(props);

    this.state = { sticky: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ sticky: window.pageYOffset > 60 });
  };

  render() {
    return (
      <div>
        <div className="w-full h-full">
          <Menu sticky={this.state.sticky}></Menu>
          <NewsFeed></NewsFeed>
        </div>
      </div>
    );
  }
}

// const App = props => {
//   const [sticky, setSticky] = React.useState<boolean>(false);
//   React.useEffect(() => {
//     setSticky(window.pageYOffset > 10);
//     console.log(window.pageYOffset, sticky);
//   }, [window.pageYOffset]);

//   return (

//   );
// };

export default App;
