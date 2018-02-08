import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles ={
    center: {
        position: 'absolute',
        margin: 'auto',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 0,
        height: 0,
        border: '1px red dashed'
    },
    lifeTotal: {
        fontSize: 130,
        position: 'absolute',
        margin: 'auto',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 0,
        height: 0,
        border: '1px blue dashed'
       
    }
}
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        total: 40,
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
          <div style={styles.center}>
            <div style={styles.lifeTotal}>{this.state.total}</div>
            

          </div>

         // <Row style={styles.rowStyle}>
         // <FlatButton style={styles.button} label="+" onTouchTap={() => this.handlePlusClick()} />
         // <div style={styles.lifeDisplay}><span style={styles.counterText}>{this.state.total}</span></div>
        //  <FlatButton style={styles.button} label="-"  onTouchTap={() => this.handleMinusClick()}/>
        //  </Row>
            
         
            
        )}
}