import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

const countStyle = {
    counterText: {
        color: "Red",
    },
    background: {
        width: 300
    }
}
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        total: 40,
        playerData:  this.props.playerData,
      };
    }

    handlePlusClick = () => {
        this.setState({total: this.state.total + 1})
    }
    handleMinusClick = () => {
        this.setState({total: this.state.total - 1})
    }
    handleResetClick = () => {
        this.setState({total: 40})
    }

    render() {
        //It's not recommended to apply the bind within the render function 
        //since it will do it every time the component is rendered. you can move it to some function which runs at the start of the lifecycle
        return (
            <div style={this.state.playerData}>
            <FlatButton label="+" onClick={() => this.handlePlusClick()} />
            <FlatButton><span style={countStyle.counterText}>{this.state.total}</span></FlatButton>
            <FlatButton label="-"  onClick={() => this.handleMinusClick()}/>
            <br />
            <FlatButton label="Reset" onClick={() => this.handleResetClick()} />
            </div>
            
        )}
}