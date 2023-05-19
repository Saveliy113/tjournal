//REACT, NEXT
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

//COMPONENTS
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

//CSS
import { theme } from '../theme';
import 'macro-css';
import '../styles/globals.scss';
import { Header } from '@/components/Header';
import { store } from '@/redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </MuiThemeProvider>
    </>
  );
}
