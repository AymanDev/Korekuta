import React from "react";
import News from "./News";

const preview = require("../../public/images/azur-lane.jpg");

import "./news.pcss";
import { NewsData } from "./NewsData";
import NewsReader from "./NewsReader";

export interface NewsFeedProps {}

export interface NewsFeedState {
  readingNews: NewsData | null;
  news: NewsData[];
}

class NewsFeed extends React.Component<NewsFeedProps & any, NewsFeedState> {
  constructor(props) {
    super(props);

    this.state = {
      readingNews: null,
      news: [
        {
          title: "Скан с героинями мобильной игры «Azur Lane»",
          shortDescription:
            "Какой-то гипер супер пупер не реально важный постер! С гипер супер пупер важным текстом! И что самое главное вупсень или пусень. Многа букаф, лень писать латынь, вайнот?",
          description:
            "Какой-то гипер супер пупер не реально важный постер! С гипер супер пупер важным текстом! И что самое главное вупсень или пусень. Многа букаф, лень писать латынь, вайнот? Нужно больше текста богу текста ибо скролла нет, дайте скролл пидоры! Блиа не хватило пару слов, ну как так-то, ну але!",
          image: preview
        },
        {
          title: "Скан с героинями мобильной игры «Azur Lane»",
          shortDescription:
            "Какой-то гипер супер пупер не реально важный постер! С гипер супер пупер важным текстом! И что самое главное вупсень или пусень. Многа букаф, лень писать латынь, вайнот?",
          description:
            "Какой-то гипер супер пупер не реально важный постер! С гипер супер пупер важным текстом! И что самое главное вупсень или пусень. Многа букаф, лень писать латынь, вайнот? Нужно больше текста богу текста ибо скролла нет, дайте скролл пидоры! Блиа не хватило пару слов, ну как так-то, ну але!",
          image: preview
        }
      ]
    };
  }

  render() {
    return (
      <div className="w-full h-full sm:px-5 py-64 sm:py-2 flex flex-col items-start justify-start container block mx-auto mt-24">
        {this.state.news.map((newsData, index) => (
          <News
            title={newsData.title}
            shortDescription={newsData.shortDescription}
            description={newsData.description}
            image={newsData.image}
            onClick={() => this.setState({ readingNews: newsData })}
            key={"news-" + index}
          ></News>
        ))}
        {this.state.readingNews && (
          <NewsReader
            newsData={this.state.readingNews}
            onClose={() => this.setState({ readingNews: null })}
          ></NewsReader>
        )}
      </div>
    );
  }
}

export default NewsFeed;
