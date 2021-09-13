import { Provider } from "react-redux";

import store from "../redux/store";

import "../styles/style.scss";

import { Header } from "../components";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <div className="wrapper">
          <div className="container">
            <Header />
            <Component {...pageProps} />
          </div>
        </div>
      </>
    </Provider>
  );
}

export default App;
