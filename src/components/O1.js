import React from 'react'

class O1 extends React.Component {
    render() {
        return (
            <div className="O1">
                {JSON.stringify(this.props.gameConf)}
                <div className="main">
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
                    <div>player1</div>
                </div>
            </div>
        );
    }
}

export default O1
