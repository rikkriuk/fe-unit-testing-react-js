import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../assets/components/context/ThemeContext";
import ThemeButton from "../../assets/components/context/ThemeButton";

describe("ThemeButton Component", () => {
   test("renders with the correct background color", () => {
      render(
         <ThemeProvider value="red">
            <ThemeButton />
         </ThemeProvider>
      )

      expect(screen.getByText("Click Me")).toHaveStyle({ backgroundColor: "red" });
   })
})