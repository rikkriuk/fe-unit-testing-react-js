import { render } from "@testing-library/react";
import Header from "../../assets/components/Header";

describe("Header Component", () => {
   test("renders header", () => {
      render(<Header />);
      expect(document.querySelector("h1")).toHaveTextContent("Welcome to Header");
   })

   test("match snapshot", () => {
      const { container } = render(<Header />);
      expect(container).toMatchSnapshot();
   })
})