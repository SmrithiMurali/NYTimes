import "./ArticleDetail.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const ArticleDetail = ({ articles }) => {
  const id = useParams().id;
  const selectedArticle = articles.filter(
    (article) => article.id === Number(id)
  );
  const { title, abstract, url, media, byline, section, subsection, updated } =
    selectedArticle[0];
  return (
    <div className="details-viewpage">
      <div className="back-btn-container">
        <Link to="/">
          <button className="back-btn">Go Back</button>
        </Link>
      </div>
      <div className="article-details">
        <div className="details-container">
          <h1>{title}</h1>
          <p>{abstract}</p>
          <a
            className="article-link"
            href={url}
            rel="noreferrer"
            target="_blank"
          >
            Read More...
          </a>
          <p>{byline}</p>
          <p>{updated}</p>
          {section && <span className="article-tag">{section}</span>}
          {subsection && <span className="article-tag">{subsection}</span>}
        </div>
        <div className="img-container">
          <img
            src={media[0]?.["media-metadata"][2]?.url}
            alt={media[0]?.["media-metadata"][2]?.caption}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
