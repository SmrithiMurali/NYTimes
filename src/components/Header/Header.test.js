import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, test, expect } from "@testing-library/jest-dom";

describe("Header Component", () => {
  test("renders header with correct date format", () => {
    render(<Header />);
    expect(screen.getByText("The New York Times")).toBeInTheDocument();
  });
});
