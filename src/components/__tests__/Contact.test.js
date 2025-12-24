import { render, screen, cleanup } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

beforeAll(() => {
  // runs once before all tests in this file
});

beforeEach(() => {
  // render component before each test
  render(<Contact />);
});

afterEach(() => {
  // cleanup DOM after each test
  cleanup();
});

afterAll(() => {
  // runs once after all tests in this file
});

test("Should load contact us component", () => {
  // Query
  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});