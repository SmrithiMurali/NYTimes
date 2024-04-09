import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleList from "./ArticleList";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "@testing-library/jest-dom";

describe("ArticleList Component", () => {
  test("renders no results message correctly when articles array is empty", () => {
    const articles = [];
    render(<ArticleList articles={articles} />);

    expect(screen.getByText("No results were found.")).toBeInTheDocument();
  });

  test("renders article cards correctly when articles array is not empty", () => {
    const articles = [
      {
        id: 1,
        title: "Article 1",
        abstract: "Abstract 1",
        media: [
          {
            "media-metadata": [
              null,
              { url: "image-url1", caption: "Image 1" },
              { url: "image-url2", caption: "Image 2" },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Article 2",
        abstract: "Abstract 2",
        media: [
          {
            "media-metadata": [
              null,
              { url: "image-url3", caption: "Image 3" },
              { url: "image-url4", caption: "Image 4" },
            ],
          },
        ],
      },
    ];

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route exact path="/" element={<ArticleList articles={articles} />} />{" "}
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId("article-list")).toBeInTheDocument();

    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Abstract 1")).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
    expect(screen.getByText("Abstract 2")).toBeInTheDocument();
  });
});
