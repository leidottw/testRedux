import React from 'react'

class CricketMenu extends React.Component {
    render() {
        return (
            <div>
                <div onClick={this.props.changePage.bind(null, 'Start')}>Back</div>
                <h1>Cricket Menu</h1>
                <ul>
                    <li>STANDARD CRICKET</li>
                    <li>No Score Cricket</li>
                    <li>Cut Throat Cricket</li>
                    <li>Killer Cricket</li>
                </ul>
            </div>
        );
    }
}

export default CricketMenu
