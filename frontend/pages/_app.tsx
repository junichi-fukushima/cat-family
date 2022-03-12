// React && Redux
import { useEffect } from "react";
import { Provider } from "react-redux";
import createStore from "../src/state/store/store";

// Next.js
import type { AppProps } from "next/app";

// styles
import "../styles/globals.scss";

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
