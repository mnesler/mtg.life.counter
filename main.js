import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    color: 'blue'
  },
  appBackground: {
    backgroundColor: "#EAFAF1"
  },
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Yell0 Green Red"
    };
  }
  render() {
    return (
      <MuiThemeProvider>
        <FlatButton label="+" />
        </MuiThemeProvider>
    )}
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);



