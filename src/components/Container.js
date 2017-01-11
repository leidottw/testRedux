import React from 'react'
import { connect } from 'react-redux'
import { shoot, changePage, play01 } from '../actions'
import { Start, O1Menu, CricketMenu, CountUpMenu, PlayerSetting, DeviceSetting, O1 } from './'

class Container extends React.Component {
    constructor(props) {
        super(props)

        window.addEventListener("beforeunload", function (e) {
            var confirmationMessage = 'It looks like you have been editing something. '
                                    + 'If you leave before saving, your changes will be lost.';

            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
            return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
        });


        window.addEventListener("keypress", this.keyPressHandler, false)
    }

    keyPressHandler = (e) => {
        for(let key in this.props.KeyCode) {
            if(this.props.KeyCode[key] === e.keyCode) {
                let match = key.match(/^_(\d+)(S|SI|T|SO|D)$/)
                if(match) {
                    if(match[2] === 'T') {
                        this.props.shoot(+match[1], 3)
                        console.log(+match[1] * 3)
                    } else if(+match[2] === 'D') {
                        this.props.shoot(+match[1], 2)
                        console.log(+match[1] * 2)
                    } else {
                        this.props.shoot(+match[1], 1)
                        console.log(+match[1])
                    }
                } else if(key === '_bullS') {
                    this.props.shoot(25, 1)
                    console.log(50)
                } else if(key === '_bullD') {
                    this.props.shoot(25, 2)
                    console.log(50)
                }
            }
        }
    }

    render() {
        let view;
        switch(this.props.Config.page) {
            case 'Start':
                view = (<Start changePage={this.props.changePage} />)
                break
            case '01Menu':
                view = (<O1Menu changePage={this.props.changePage} play01={this.props.play01} />)
                break
            case 'CricketMenu':
                view = (<CricketMenu changePage={this.props.changePage} />)
                break
            case 'CountUpMenu':
                view = (<CountUpMenu changePage={this.props.changePage} />)
                break
            case 'PlayerSetting':
                view = (<PlayerSetting changePage={this.props.changePage} />)
                break
            case 'DeviceSetting':
                view = (<DeviceSetting changePage={this.props.changePage} />)
                break
            default:
                view = (<Start changePage={this.props.changePage} />)
        }

        switch(this.props.Config.game) {
            case '01':
                view = (<O1 Config={this.props.Config} KeyEvent={this.props.KeyEvent} />)
        }

        return (
            <div>
                {view}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        Config: state.Config,
        KeyCode: state.KeyCode,
        KeyEvent: state.KeyEvent
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changePage: (...args) => {
            dispatch(changePage(...args))
        },
        shoot: (...args) => {
            dispatch(shoot(...args))
        },
        play01: (...args) => {
            dispatch(play01(...args))
        }
    }
}

Container = connect(mapStateToProps, mapDispatchToProps)(Container)

export default Container
