import { Provider } from "react-redux";

import { useStore } from "../redux/store";

import "../styles/style.scss";

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
