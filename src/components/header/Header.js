import React from 'react';
import {Icon} from 'antd';
import './Header.css'
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className="Header-header">
                <div className="Header-header-item">
                    <span className="Header-title">MTCISTERN</span>
                </div>
                <div className="Header-header-item">
                    <ul className="Header-header-tools">
                        <li> <Icon type="minus" /></li>
                        <li> <Icon type="plus" /></li>
                        <li><Icon type="close" /></li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header