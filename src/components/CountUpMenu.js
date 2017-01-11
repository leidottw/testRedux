import React from 'react'

class CountUpMenu extends React.Component {
    render() {
        return (
            <div>
                <div onClick={this.props.changePage.bind(null, 'Start')}>Back</div>
                <h1>Count Up Menu</h1>
                <ul>
                    <li>Count Up 200</li>
                    <li>Count Up 400</li>
                    <li>Count Up 600</li>
                    <li>Count Up 800</li>
                    <li>Count Up 1000</li>
                    <li>High Score</li>
                </ul>
            </div>
        );
    }
}

export default CountUpMenu
