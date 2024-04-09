import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import "@testing-library/jest-dom";

describe("ArticleCard Component", () => {
  test("renders article card correctly", () => {
    const article = {
      title: "Test Article",
      abstract: "This is a test article.",
      id: 123,
      multimedia: { url: "test-url", caption: "Test Caption" },
    };

    render(
      <MemoryRouter>
        <ArticleCard {...article} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByText("This is a test article.")).toBeInTheDocument();
    expect(screen.getByAltText("Test Caption")).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/article/${article.id}`);
  });
});
