import { AppProps } from "next/app";
import { Provider } from "react-redux";

import { Header } from "../components/Header";
import { store } from "../redux/store";

import "../styles/style.scss";

// TODO:
// 1) Сделать соритровку по цене не через minPrice
// 2) Сделать dispatch для модальных окон

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <div className="container">
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </div>
    </div>
  );
}

export default App;
