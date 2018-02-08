import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
export default class MtgButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 40
        };
    }
    handlePlusClick = () => {
        this.setState({total: this.state.total + 1})
    }
    handleMinusClick = () => {
        this.setState({total: this.state.total - 1})
    }
    handleTotalClick = () => {
        
    }

    render() {
        const countStyle = {
            mtgButtonStyle: {
                addone: {
                    backgroundColor: 'red',
                    height: 100,
                    width: '33%'
                },
                minusOne: {
                    backgroundColor: 'pink',
                    height: 100,
                    width: '33%'
                },
                total: {
                    backgroundColor: 'lightBlue',
                    height: 100,
                    width: '33%'
                }
            },
        }
        return (
            <div>
            <Row>
            <Col xs><div onTouchTap={() => this.handlePlusClick()} style={countStyle.mtgButtonStyle.addone}>add one</div></Col>
            <Col xs><div onTouchTap={() => this.handleTotalClick()} style={countStyle.mtgButtonStyle.total}>{this.state.total}</div></Col>
            <Col xs><div onTouchTap={() => this.handleMinusClick()} style={countStyle.mtgButtonStyle.minusOne}>minus one</div></Col>
            </Row>
            </div>
        )
    }
}