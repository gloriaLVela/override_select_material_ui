import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import SimpleSelect from './Components/SimpleSelect';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const contentStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    paddingTop: '60px',
  },
}));



function App() {

  const classes = contentStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className={classes.root} >
          <SimpleSelect />
          {/* <CssBaseline /> */}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
