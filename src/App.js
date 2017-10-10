import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import {MyButton} from './presentationObjects';
import AppBar from 'material-ui/AppBar';
// import logo from './logo.svg';
import './App.css';
// import BarGraph from './BarGraph';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

class App extends Component {

  render() {
    return (

      <MuiThemeProvider theme={theme}>
        <AppBar title="My AppBar" >Survey</AppBar>
        <Card>
          <Card>
            <CardContent>
              <p>test</p>
            </CardContent>
          </Card>
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default App1;
