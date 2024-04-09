import { Link } from "react-router-dom";
import React from "react";

const ArticleCard = ({ title, abstract, id, multimedia }) => {
  return (
    <Link to={`article/${id}`}>
      <article className="article-card">
        <h2>{title}</h2>
        <img src={multimedia?.url} alt={multimedia?.caption} />
        <p>{abstract}</p>
      </article>
    </Link>
  );
};

export default ArticleCard;
