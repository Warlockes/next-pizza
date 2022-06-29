import { AppProps } from "next/app";

import MainLayout from "../components/MainLayout";
import { wrapper } from "../redux/store";

import "../styles/style.scss";

// TODO:
// 1) Сделать соритровку по цене не через minPrice - на своем бэке
// 2) Сделать dispatch для модальных окон
// 3) Переписать стили на модули
// 4) типизация для компонентов

function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(App);
