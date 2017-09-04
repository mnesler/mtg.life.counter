import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p1: {
        background: "#F5A9A9",
        width: 300,
        fontSize: 40
      },
      p2: {
        background: "#A9F5F2",
        width: 300,
        fontSize: 40
      }
    };
  }
  render() {
    return (
      <MuiThemeProvider>
      <div>
      <Counter playerData={this.state.p1} />
      <br />
      <Counter playerData={this.state.p2}/>
      </div>
        </MuiThemeProvider>
    )}
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);



