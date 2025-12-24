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

test("should load submit button inside Contact component", () => {
  const submitBtn = screen.getByRole("button", { name: /submit/i });
  expect(submitBtn).toBeInTheDocument();
});

test("should load input name inside Contact component", () => {
  const nameInput = screen.getByPlaceholderText(/name/i);
  expect(nameInput).toBeInTheDocument();
});

test("should load 2 input boxes on the Contact component", () => {
  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toBe(2);
});