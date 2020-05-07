import React from 'react';
import './List.css'
import ListContainer from "../ListContainer";
class List extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="listMain">
                <ul className="list-ul">
                    <li>
                        <ListContainer/>
                    </li>
                    <li>
                        <ListContainer/>
                    </li>
                    <li>
                        <ListContainer/>
                    </li>
                </ul>
            </main>
        )
    }
}
export default List
