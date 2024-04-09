import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import apiCalls from "./services/nyTimesService";
import { describe, test, expect, jest} from "@testing-library/jest-dom"

jest.mock("./services/nyTimesService");

describe("App Component", () => {
  test("renders loading state correctly", async () => {
    apiCalls.getMostPopularArticles.mockResolvedValueOnce({
      status: "OK",
      results: [],
    });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading articles...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Loading articles...")).not.toBeInTheDocument();
    });
  });

  test("renders error message correctly", async () => {
    apiCalls.getMostPopularArticles.mockRejectedValueOnce(new Error("Request failed"));

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Something went wrong, please rty again later")).toBeInTheDocument();
    });
  });
});
