import { AppProps } from "next/app";
import { Provider } from "react-redux";

import MainLayout from "../components/MainLayout";
import { store } from "../redux/store";

import "../styles/style.scss";

// TODO:
// 1) Сделать соритровку по цене не через minPrice
// 2) Сделать dispatch для модальных окон
// 3) Переписать стили на модули

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
