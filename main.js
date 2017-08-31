import React from 'react';
import ReactDOM from 'react-dom';

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
    return (<div style={styles.headline}>{this.state.message}</div>)

  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);



