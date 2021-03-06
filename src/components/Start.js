import React from 'react'

class Start extends React.Component {
    render() {
        return (
            <div>
                <h1>darts</h1>
                <ul>
                    <li>
                        <div onClick={this.props.changePage.bind(null, '01Menu')}>01</div>
                    </li>
                    <li>
                        <div onClick={this.props.changePage.bind(null, 'CricketMenu')}>Cricket</div>
                    </li>
                    <li>
                        <div onClick={this.props.changePage.bind(null, 'CountUpMenu')}>Count Up</div>
                    </li>
                    <li>
                        <div onClick={this.props.changePage.bind(null, 'PlayerSetting')}>Player Setting</div>
                    </li>
                    <li>
                        <div onClick={this.props.changePage.bind(null, 'DeviceSetting')}>Device Setting</div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Start
