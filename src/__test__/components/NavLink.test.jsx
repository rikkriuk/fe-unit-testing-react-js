import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import NavLink from "../../assets/components/NavLink";

describe("NavLink Component", () => {
   test("render link with correct href", () => {
      render(
         <MemoryRouter>
            <NavLink />
         </MemoryRouter>
      )
      
      expect(screen.getByText("About").closest("a")).toHaveAttribute("href", "/about");
   })
})