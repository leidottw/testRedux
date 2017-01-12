import React from 'react'

class O1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.Config.gameConf
        this.state.playerList = this.props.Config.playerList
    }

    render() {
        let playerList = [];
        this.state.playerList.forEach((player) => {
            playerList.push(<div>{player.name}</div>)
        });

        return (
            <div className="O1">
                <div onClick={this.props.clearPlay}>Exit</div>
                <div className="main">
                    {this.state.type}
                    <div class="roundList">
                        <div>#1 100</div>
                        <div>#2 63</div>
                        <div>#2 45</div>
                        <div>#2 73</div>
                    </div>
                    <div class="currentRound">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="playerList">
                    {playerList}
                </div>
            </div>
        );
    }
}

export default O1
