import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { HomeSearchField } from './components/homeSearchField';
import { DetailedMap  } from './components/detailedMap';
import { ErrorPage  } from './components/errorPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ButtonAppBar } from './components/buttonAppBar';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router>
          <ButtonAppBar />
          <Route path="/" exact component={HomeSearchField} />
          <Route path="/map" component={DetailedMap} />
          {/* <Route component={ErrorPage} /> */}
        </Router>
      </ThemeProvider>
  );
}

export default App;
