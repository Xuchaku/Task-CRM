import React from "react";
import "./News.scss";
import { paragraphs } from "../../constants/paragraphs";
const News = () => {
  return (
    <div className="News">
      <h2>Новости</h2>
      <h3>Обновление CRM до 1.2</h3>
      {paragraphs.map((paragraph) => {
        return <p key={paragraph.id}>{paragraph.content}</p>;
      })}
    </div>
  );
};

export default News;
