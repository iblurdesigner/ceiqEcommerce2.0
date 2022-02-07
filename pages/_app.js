import AppLayout from "components/AppLayout";
import "../styles/globals.css";
//redux
import { Provider } from "react-redux";
// import store from "store";
import store from "app/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;
