import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import defaultTheme from '../../themes/default';

const StyledAppContainer = styled.div`
  color: ${props => props.theme.mainColor};
  background-color: ${props => props.theme.mainBackgroundColor};
`;

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <StyledAppContainer>
      Hello World!
    </StyledAppContainer>
  </ThemeProvider>
);

export default App;
