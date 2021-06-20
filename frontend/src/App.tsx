import './App.css';
import {
  CssBaseline,
  MuiThemeProvider,
  NoSsr,
  StylesProvider,
  Box,
} from '@material-ui/core';
import { theme } from './AppTheme';
import { ThemeProvider } from 'styled-components';
import SideNavigationBar from './components/SideNavigationBar';
import { TestParagraph } from './components/TestParagraph';

const App = () => {
  return (
    <NoSsr>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <Box display='flex'>
                <SideNavigationBar></SideNavigationBar>
                <TestParagraph>Test paragraph</TestParagraph>
              </Box>
            </CssBaseline>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </NoSsr>
  );
};

export default App;
