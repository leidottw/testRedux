import React from 'react'

class PlayerSetting extends React.Component {
    render() {
        return (
            <div>
                <div onClick={this.props.changePage.bind(null, 'Start')}>Back</div>
                <h1>Player Setting</h1>
            </div>
        );
    }
}

export default PlayerSetting
