import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../../assets/components/redux/slices/counterSlice";
import CounterButton from "../../assets/components/redux/CounterButton";

describe("CounterButton Component", () => {
   let store;

   beforeEach(() => {
      store = configureStore({
         reducer: {
            counter: counterSlice,
         },
      });
   });

   test("renders the initial count", () => {
      render(
         <Provider store={store}>
            <CounterButton />
         </Provider>
      )

      const countButton = screen.getByText("Increment");
      expect(countButton).toBeInTheDocument();

      const count = screen.getByText("Count: 0");
      expect(count).toBeInTheDocument();
   })

   test("value must increment when button counter click", () => {
      render(
         <Provider store={store}>
            <CounterButton />
         </Provider>
      )

      fireEvent.click(screen.getByText("Increment"));
      expect(screen.getByText("Count: 1")).toBeInTheDocument();
   })
})