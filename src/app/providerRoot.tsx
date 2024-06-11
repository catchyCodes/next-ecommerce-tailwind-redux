"use client";
import configureStore from "@/redux/store";
import { Provider } from "react-redux";
import ChildrenProvider from "./childrenProvider";

function ProviderRoot({ children }: any) {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ChildrenProvider>{children}</ChildrenProvider>
    </Provider>
  );
}

export default ProviderRoot;
