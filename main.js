import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MediaQuery from './components/mediaquerydemo.js'
import MtgButton from './components/mtgButton.js'

const styles ={
  container: {
    //minWidth: 414,
    //minHeight: 736, 
    borderWidth: 0.5,
    borderColor: '#d6d7da',
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
      <div style={styles.container}>
     
      <Counter playerData={this.state.p1} />
      <br />
    {/*<Counter playerData={this.state.p2}/>*/}
      </div>
        </MuiThemeProvider>
    )}
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);



