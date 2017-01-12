import React from 'react'

class CricketMenu extends React.Component {
    render() {
        return (
            <div>
                <div onClick={this.props.changePage.bind(null, 'Start')}>Back</div>
                <h1>CRICKET</h1>
                <ul>
                    <li>STANDARD CRICKET</li>
                    <li>NO SCORE CRICKET</li>
                    <li>CUT THROAT CRICKET</li>
                    <li>KILLER CRICKET</li>
                </ul>
            </div>
        );
    }
}

export default CricketMenu
