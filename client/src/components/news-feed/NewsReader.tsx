import React from "react";
import { NewsData } from "./NewsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./news.pcss";

export interface NewsReaderProps {
  newsData: NewsData;
  onClose: () => any;
}
const NewsReader = (props: NewsReaderProps) => (
  <div className="fixed left-0 top-0 z-50 w-full h-full bg-white overflow-scroll">
    <a onClick={props.onClose} className="close-btn">
      <FontAwesomeIcon icon={faTimes} color="black"></FontAwesomeIcon>
    </a>
    <div className="block mx-auto w-full sm:w-11/12 h-full flex flex-col justify-start items-start mt-16">
      <img
        src={props.newsData.image}
        alt="azur lane preview"
        className="news-reader-img"
      />
      <h1 className="w-full text-center text-3xl my-6">
        {props.newsData.title}
      </h1>
      <p className="p-2">{props.newsData.description}</p>
    </div>
  </div>
);

export default NewsReader;
