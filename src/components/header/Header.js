import React from 'react';
import {Icon} from 'antd';
import './Header.css'
const remote = window.require("electron").remote;
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.currentWindow=remote.getCurrentWindow()
        this.state={
            maximizeIcon:'border'
        }
    }
    minimize(){
        this.currentWindow.minimize()
    }
    maximize(){
        if(this.currentWindow.isMaximized()){
            this.currentWindow.unmaximize()
            this.setState({
                maximizeIcon:'border'
            })
        }else{
            this.currentWindow.maximize()
            this.setState({
                maximizeIcon:'switcher'
            })
        }
    }
    closeWindow(){
        this.currentWindow.close()
    }
    render() {
        return (
            <header className="Header-header">
                <div className="Header-header-item">
                    <span className="Header-title">MTCISTERN</span>
                </div>
                <div className="Header-header-item">
                    <ul className="Header-header-tools">
                        <li onClick={()=>{
                            this.minimize()
                        }}> <Icon type="minus"/></li>
                        <li onClick={()=>{
                            this.maximize()
                        }}> <Icon type={this.state.maximizeIcon} /></li>
                        <li onClick={()=>{
                            this.closeWindow()
                        }}><Icon type="close" /></li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header