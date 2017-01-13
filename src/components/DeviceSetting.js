import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setKeyCode, resetKeyCode } from '../actions'


class DeviceSetting extends React.Component {
    render() {
        let blocks = []
        for(let i = 1; i <= 20; i++) {
            blocks.push(<Num num={i} key={i} />)
        }

        return (
            <div>
                <div onClick={this.props.changePage.bind(null, 'Start')}>Back</div>
                <div onClick={this.props.resetKeyCode}>reset key code</div>
                <h1>Device Setting</h1>
                <table>
                    <thead>
                        <tr>
                            <th>num</th>
                            <th>x1 inner</th>
                            <th>x3</th>
                            <th>x1 outer</th>
                            <th>x2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blocks}
                        <Bull />
                    </tbody>
                </table>
            </div>
        )
    }
}

class Num extends React.Component {
    x1InnerKeyPressHandler = (num, e) => {
        this.props.setKeyCode('_' + num + 'SI', e.charCode)
    }

    x3KeyPressHandler = (num, e) => {
        this.props.setKeyCode('_' + num + 'T', e.charCode)
    }

    x1OuterKeyPressHandler = (num, e) => {
        this.props.setKeyCode('_' + num + 'SO', e.charCode)
    }

    x2KeyPressHandler = (num, e) => {
        this.props.setKeyCode('_' + num + 'D', e.charCode)
    }

    render() {
        return (
            <tr>
                <td>{this.props.num}</td>
                <td><input onKeyPress={this.x1InnerKeyPressHandler.bind(null, this.props.num)} value={this.props.KeyCode['_' + this.props.num + 'SI']} /></td>
                <td><input onKeyPress={this.x3KeyPressHandler.bind(null, this.props.num)} value={this.props.KeyCode['_' + this.props.num + 'T']} /></td>
                <td><input onKeyPress={this.x1OuterKeyPressHandler.bind(null, this.props.num)} value={this.props.KeyCode['_' + this.props.num + 'SO']} /></td>
                <td><input onKeyPress={this.x2KeyPressHandler.bind(null, this.props.num)} value={this.props.KeyCode['_' + this.props.num + 'D']} /></td>
            </tr>
        )
    }
}

class Bull extends React.Component {
    x1KeyPressHandler = (e) => {
        this.props.setKeyCode('_bullS', e.charCode)
    }

    x2KeyPressHandler = (e) => {
        this.props.setKeyCode('_bullD', e.charCode)
    }

    render() {
        return (
            <tr>
                <td>Bull</td>
                <td><input onKeyPress={this.x1KeyPressHandler} value={this.props.KeyCode['_bullS']} /></td>
                <td></td>
                <td></td>
                <td><input onKeyPress={this.x2KeyPressHandler} value={this.props.KeyCode['_bullD']} /></td>
            </tr>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        KeyCode: state.KeyCode
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setKeyCode: (key, code) => {
            dispatch(setKeyCode(key, code))
        },
        resetKeyCode: () => {
            dispatch(resetKeyCode())
        }
    }
}

Num = connect(mapStateToProps, mapDispatchToProps)(Num)
Bull = connect(mapStateToProps, mapDispatchToProps)(Bull)

export default connect(mapStateToProps, mapDispatchToProps)(DeviceSetting)
