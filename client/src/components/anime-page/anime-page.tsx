import React from "react";

export interface AnimePageProps {

}

export interface AnimePageState {

}

class AnimePage extends React.Component<AnimePageProps, AnimePageState> {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="w-full h-full">
      dumb
    </div>;
  }
}

export default AnimePage;