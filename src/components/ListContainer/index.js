import React from "react";
import './index.css'
class ListContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="list-container">
                <div className="list-member list-name">
                    <div className="list-name-icon">
                        小
                    </div>
                    <div className="list-name-text">
                        小饼干
                    </div>
                </div>
                <div className="list-member list-detail">
                    <ul>
                        <li>18094251220</li>
                        <li>xhgainxq@qq.com</li>
                        <li>8709</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ListContainer
