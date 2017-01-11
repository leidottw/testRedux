import React from 'react'
import { Link } from 'react-router'

class Start extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/_Game01">01</Link>
                </li>
                <li>
                    <Link to="/_GameCricket">Cricket</Link>
                </li>
                <li>
                    Count Up
                </li>
                <li>
                    Player Setting
                </li>
                <li>
                    <Link to="/_DeviceSetting">Device Setting</Link>
                </li>
            </ul>
        );
    }
}

export default Start
