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
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import store, { history } from './store';
import Homepage from './pages/Homepage';
import CareRecipients from './pages/CareRecipients';
import Contact from './pages/Contact';

const App = () => {
  return (
    <NoSsr>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <Provider store={store}>
                <ConnectedRouter history={history}>
                  <Box display='flex'>
                    <SideNavigationBar></SideNavigationBar>
                    <Switch>
                      <Route
                        exact
                        path={routes.homepage}
                        component={Homepage}
                      />
                      <Route
                        path={routes.careRecipients.base}
                        component={CareRecipients}
                      />
                      <Route
                        path={routes.careRecipients.individual}
                        component={TestParagraph}
                      />
                      <Route path={routes.contact} component={Contact} />
                    </Switch>
                  </Box>
                </ConnectedRouter>
              </Provider>
            </CssBaseline>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </NoSsr>
  );
};

export default App;
