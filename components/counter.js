import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles ={
    button: {
        width: '33%',
        height: '50%',
        backgroundColor: 'blue'
    },
    lifeDisplay: {
        width: 'auto',
        height: 100,
        textAlign: 'center',
        fontSize: 22,
        color: "Red",
        background: "#F5A9A9"
    },
    uiContainer:{
        height: '50%',
        border: 1,
        borderColor: 'Green'
    }, 
    rowStyle: {
        height: '50%'
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
           
          <Row style={styles.rowStyle}>
          <FlatButton style={styles.button} label="+" onTouchTap={() => this.handlePlusClick()} />
          <div style={styles.lifeDisplay}><span style={styles.counterText}>{this.state.total}</span></div>
          <FlatButton style={styles.button} label="-"  onTouchTap={() => this.handleMinusClick()}/>
          </Row>
            
         
            
        )}
}