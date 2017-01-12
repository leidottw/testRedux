import React from 'react'

class CountUpMenu extends React.Component {
    render() {
        return (
            <div>
                <div onClick={this.props.changePage.bind(null, 'Start')}>Back</div>
                <h1>COUNT UP</h1>
                <ul>
                    <li>200</li>
                    <li>400</li>
                    <li>600</li>
                    <li>800</li>
                    <li>1000</li>
                    <li>HIGH SCORE</li>
                </ul>
            </div>
        );
    }
}

export default CountUpMenu
