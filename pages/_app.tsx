import { Provider } from "react-redux";

import { Header } from "../components/Header";
import { store } from "../redux/store";

import "../styles/style.scss";

// TODO:
// 1) Сделать соритровку по цене не через minPrice
// 2) Сделать dispatch для модальных окон

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <div className="container">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
