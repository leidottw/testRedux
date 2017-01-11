import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Game01 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            gameMode: undefined
        }

        window.addEventListener("keypress", this.keyPressHandler, false);
    }

    setGameMode = () => {
        this.setState({
            gameMode: 301
        })
    }

    keyPressHandler = (e) => {
        for(let key in this.props.KeyCode) {
            if(this.props.KeyCode[key] === e.keyCode) {
                let match = key.match(/^_(\d+)(S|SI|T|SO|D)$/)
                if(match) {
                    if(match[2] === 'T') {
                        console.log(match[1] * 3)
                    } else if(match[2] === 'D') {
                        console.log(match[1] * 2)
                    } else {
                        console.log(match[1])
                    }
                } else if(key === '_bullS') {
                    console.log(50)
                } else if(key === '_bullD') {
                    console.log(50)
                }
            }
        }
    }

    render() {
        let selector, game;
        if(this.state.gameMode) {
            game = (
                <div>
                    <div>301</div>
                </div>
            )
        } else {
            selector = (
                <ul>
                    <li onClick={this.setGameMode}>301</li>
                    <li>501</li>
                    <li>701</li>
                    <li>901</li>
                    <li>1101</li>
                    <li>1501</li>
                </ul>
            )
        }

        return (
            <div>
                <h1>01</h1>
                {game}
                {selector}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        KeyCode: state.KeyCode
    }
}

export default connect(mapStateToProps)(Game01)
