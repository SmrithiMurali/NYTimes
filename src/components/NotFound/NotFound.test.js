import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import "@testing-library/jest-dom";

describe("NotFound Component", () => {
  test("renders not found message correctly", () => {
    render(<NotFound />);

    expect(screen.getByText("404 - Not Found")).toBeInTheDocument();
    expect(
      screen.getByText("The page you are looking for does not exist.")
    ).toBeInTheDocument();
  });
});
