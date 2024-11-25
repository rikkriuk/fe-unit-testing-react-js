import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "../../assets/components/UserList";

global.fetch = jest.fn(() => {
   return Promise.resolve({
      json: () => Promise.resolve([
         { id: 1, name: "John Doe" },
         { id: 2, name: "Jane Smith" }
      ])
   })
})

describe("UserList Component", () => {
   test("renders a list of users", async () => {
      render(<UserList />)
      expect(await screen.findByText("John Doe")).toBeInTheDocument();
   })
})