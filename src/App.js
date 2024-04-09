import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList/ArticleList";
import apiCalls from "./services/nyTimesService";
import Header from "./components/Header/Header";
import ArticleDetail from "./components/ArticleDetail/ArticleDetail";
import NotFound from "./components/NotFound/NotFound";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiCalls
      .getMostPopularArticles()
      .then((data) => {
        setLoading(false);
        if (data.status === "OK") {
          setArticles(data.results);
        } else {
          setError("Something went wrong, please rty again later");
        }
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong, please rty again later");
      });
  }, []);

  return error.length ? (
    <p className="error">{error}</p>
  ) : (
    <div className="app-container">
      <Header />
      {loading ? (
        <div className="loading-container">Loading articles...</div>
      ) : (
        <Routes>
          <Route exact path="/" element={<ArticleList articles={articles} />} />
          <Route
            exact
            path="/article/:id"
            element={<ArticleDetail articles={articles} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
