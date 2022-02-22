import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";
import createStore from "../state/store/store";

// reduxのstoreをメソッドとして呼び出してProviderに挿入する
// storeの参照 / connect関数を使用出来るようにする
export const store = createStore();

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
