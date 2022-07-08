import '../assets/scss/globals.css'
import type { AppProps } from 'next/app'
import {createContext} from "react";
import {store, Store} from "../store/store";

export const StoreContext = createContext<Store>({} as Store)

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <StoreContext.Provider value={store}>
        <Component {...pageProps} />
      </StoreContext.Provider>
      )
}

export default MyApp
