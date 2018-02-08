import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlayerCounter from './components/playerCounter'

const styles ={
  container: {
    //minWidth: 414,
    //minHeight: 736, 
    //borderWidth: 0.5,
    //borderColor: '#d6d7da',
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <MuiThemeProvider>
      <div>
      <PlayerCounter />
      <br />
      </div>
        </MuiThemeProvider>
    )}
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);



