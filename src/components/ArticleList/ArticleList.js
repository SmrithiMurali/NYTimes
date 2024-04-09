import "./ArticleList.scss";
import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleList = ({ articles }) => {
  const articleCards = articles.map((article) => {
    return (
      <ArticleCard
        key={article.id}
        id={article.id}
        title={article.title}
        abstract={article.abstract}
        multimedia={
          window.innerWidth <= 768
            ? article.media[0]?.["media-metadata"][1]
            : article.media[0]?.["media-metadata"][2]
        }
      />
    );
  });
  return !articleCards.length ? (
    <p className="no-results-msg">No results were found.</p>
  ) : (
    <div className="article-list" data-testid="article-list">{articleCards}</div>
  );
};

export default ArticleList;
