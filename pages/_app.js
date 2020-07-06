import Header from 'components/Header';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import getConfig from 'next/config';
import axios from 'axios';
import { createContext } from 'react';
import theme from '../theme/theme';

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export const NavigationsContext = createContext({});

const MyApp = ({ Component, pageProps, data }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavigationsContext.Provider value={data}>
          <Header> </Header>
          <Component {...pageProps} />
        </NavigationsContext.Provider>
      </ThemeProvider>
    </>
  );
};

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
  const response = await axios.get(
    `${publicRuntimeConfig.API_URL}/navigations`
  );
  const { data } = await response;

  return { data };
};
export default MyApp;
