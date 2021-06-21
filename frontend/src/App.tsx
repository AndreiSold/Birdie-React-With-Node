import './App.css';
import {
  CssBaseline,
  MuiThemeProvider,
  NoSsr,
  StylesProvider,
  Box,
  Container,
} from '@material-ui/core';
import { theme } from './AppTheme';
import { ThemeProvider } from 'styled-components';
import SideNavigationBar from './components/SideNavigationBar';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import store, { history } from './store';
import Homepage from './pages/Homepage';
import CareRecipients from './pages/CareRecipients';
import Contact from './pages/Contact';
import CareRecipient from './pages/CareRecipient';
import NotFound from './pages/NotFound';

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
                    <Container>
                      <Box
                        minWidth='calc(100% - 250px)'
                        minHeight='100%'
                        paddingTop={12}
                      >
                        <Switch>
                          <Route
                            exact
                            path={routes.homepage}
                            component={Homepage}
                          />
                          <Route
                            exact
                            path={routes.careRecipients.base}
                            component={CareRecipients}
                          />
                          <Route
                            path={routes.careRecipients.individual}
                            component={CareRecipient}
                          />
                          <Route path={routes.contact} component={Contact} />
                          <Route path='*' component={NotFound} />
                        </Switch>
                      </Box>
                    </Container>
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
