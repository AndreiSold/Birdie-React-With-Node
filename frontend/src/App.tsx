import './App.css';
import {
  CssBaseline,
  MuiThemeProvider,
  NoSsr,
  StylesProvider,
} from '@material-ui/core';
import { theme } from './AppTheme';
import { ThemeProvider } from 'styled-components';
import SideNavigationBar from './components/SideNavigationBar';

const App = () => {
  return (
    <NoSsr>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <SideNavigationBar></SideNavigationBar>
            </CssBaseline>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </NoSsr>
  );
};

export default App;
