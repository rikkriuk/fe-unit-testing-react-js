import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App Component", () => {
   test("renders vite logo", () => {
      render(<App />);
      const viteLogo = screen.getByAltText("Vite logo");
      expect(viteLogo).toBeInTheDocument();
   })

   test("renders react logo", () => {
      render(<App />);
      const reactLogo = screen.getByAltText("React logo");
      expect(reactLogo).toBeInTheDocument();
   })

   test("display count is 0", () => {
      render(<App />);
      const count = screen.getByText("count is 0");
      expect(count).toBeInTheDocument();
   })

   test("increments count when button is clicked", () => {
      render(<App />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      const count = screen.getByText("count is 1");
      expect(count).toBeInTheDocument();
   })
})

