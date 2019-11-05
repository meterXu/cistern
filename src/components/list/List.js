import React from 'react';
import {Icon} from 'antd';
import './List.css'
class List extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="listMain">
                <ul className="list-ul">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                </ul>
            </main>
        )
    }
}
export default List