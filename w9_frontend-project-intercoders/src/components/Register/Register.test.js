import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Register from "./Register.js";

//Checking whether the button called Register is on the page
test("renders register", () => {
  render(<Register />);
  const button = screen.getByRole("button", { name: "Register" });
  expect(button).toBeInTheDocument();
  //screen.debug();
});
