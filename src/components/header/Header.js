const electron = window.require('electron');
import React from 'react';
import {Icon} from 'antd';
import './Header.css'
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    minWindow(){
        console.log(window.electron)
    }
    render() {
        return (
            <header className="Header-header">
                <div className="Header-header-item">
                    <span className="Header-title">MTCISTERN</span>
                </div>
                <div className="Header-header-item">
                    <ul className="Header-header-tools">
                        <li> <Icon type="minus" onClick={()=>{
                            this.minWindow()
                        }}/></li>
                        <li> <Icon type="plus" /></li>
                        <li><Icon type="close" /></li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header