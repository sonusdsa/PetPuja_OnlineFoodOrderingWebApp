import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
test("Logo should be loaded On Render Header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //Check if logo is loaded

  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online Status should be green On Render Header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //Check for the onLine

  const OnLineStatus = header.getByTestId("onLine-Status");

  expect(OnLineStatus.innerHTML).toBe("🟢");
});

test("Cart Should have 0 items On Render Header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //Check for the Cart items

  const CartItem = header.getByTestId("cart");

  expect(CartItem.innerHTML).toBe("Cart - 0 items");
});
