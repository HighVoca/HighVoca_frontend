import { ThemeProvider } from '@emotion/react';
import theme from './Theme';
import GlobalStyle from './GlobalStyle';
import type React from 'react';

interface StyleProps {
  children: React.ReactNode;
}

const Style = ({children: StyleProps}) => {
	return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Style;
