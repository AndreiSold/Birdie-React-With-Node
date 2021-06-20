import './App.css';
import {
  CssBaseline,
  MuiThemeProvider,
  NoSsr,
  StylesProvider,
  Typography,
} from '@material-ui/core';
import { theme } from './AppTheme';
import styled, { ThemeProvider } from 'styled-components';

const TestParagraph = styled(Typography)`
  ${({ theme }) => `
  color: ${theme.palette.secondary.main};
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 10px;
  font-size: 20px;
  font-family: 'Roboto';
`}
`;

const App = () => {
  return (
    <NoSsr>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <TestParagraph>
                The Material UI theme and styled components are working
              </TestParagraph>
            </CssBaseline>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </NoSsr>
  );
};

export default App;
