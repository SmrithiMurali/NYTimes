import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, useParams, Routes } from "react-router-dom";
import ArticleDetail from "./ArticleDetail";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("ArticleDetail Component", () => {
  test("renders article details correctly", () => {
    const mockParams = { id: "1" };
    useParams.mockReturnValue(mockParams);

    const articles = [
      {
        id: 1,
        title: "Article 1",
        abstract: "Abstract 1",
        url: "https://example.com/article1",
        media: [
          {
            "media-metadata": [{ url: "image-url", caption: "image-caption" }],
          },
        ],
        byline: "Author 1",
        section: "Section 1",
        subsection: "Subsection 1",
        updated: "2022-04-06T23:08:32-04:00",
      },
    ];

    render(
      <MemoryRouter initialEntries={["/article/1"]}>
        <Routes>
          <Route
            exact
            path="/article/:id"
            element={<ArticleDetail articles={articles} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Abstract 1")).toBeInTheDocument();
    expect(screen.getByText("Author 1")).toBeInTheDocument();
    expect(screen.getByText("Read More...")).toBeInTheDocument();
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Subsection 1")).toBeInTheDocument();
  });
});
