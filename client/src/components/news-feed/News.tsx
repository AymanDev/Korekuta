import React from "react";

import "./news.pcss";

export interface NewsProps {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  onClick: () => any;
}

const News = (props: NewsProps) => (
  <div className="w-full h-full my-2 px-1 shadow-2xl rounded flex flex-col justify-center items-center">
    <a className="news-header" onClick={props.onClick}>
      <img
        src={props.image}
        alt="azur lane preview"
        className="news-header-img"
      />
      <h1 className="text-black bg-white px-2 mx-3 text-center z-10">
        {props.title}
      </h1>
    </a>
    <h1 className="m-2 text-gray-700">{props.shortDescription}</h1>
    <a className="read-btn" onClick={props.onClick}>
      Читать дальше...
    </a>
  </div>
);

export default News;
