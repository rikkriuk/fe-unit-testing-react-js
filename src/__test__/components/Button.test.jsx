import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../assets/components/Button"

describe("Button Component", () => {
   test("renders button", () => {
      render(<Button label="Click me" />);
      const text = screen.getByText("Click me");
      expect(text).toBeInTheDocument();
   })
})