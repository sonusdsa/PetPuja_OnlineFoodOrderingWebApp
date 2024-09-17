import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import RestaurantMenu from "../RestrauntMenu";
import { MENU_DATA } from "../../mocks/data";
import Header from "../Header";
// import { fireEvent, waitFor } from "@testing-library/dom";
import { render, fireEvent, waitFor } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("cart - 1 items");
  console.log(container.innerHTML);
});
