import React from 'react'

class O1Menu extends React.Component {
    render() {
        return (
            <div>
                <div onClick={this.props.changePage.bind(null, 'Start')}>Back</div>
                <h1>01</h1>
                <ul>
                    <li onClick={this.props.play01.bind(null, 301, 'open', 'open')}>301</li>
                    <li onClick={this.props.play01.bind(null, 501, 'open', 'open')}>501</li>
                    <li onClick={this.props.play01.bind(null, 701, 'open', 'open')}>701</li>
                    <li onClick={this.props.play01.bind(null, 901, 'open', 'open')}>901</li>
                    <li onClick={this.props.play01.bind(null, 1101, 'open', 'open')}>1101</li>
                    <li onClick={this.props.play01.bind(null, 1501, 'open', 'open')}>1501</li>
                </ul>
            </div>
        )
    }
}

export default O1Menu
