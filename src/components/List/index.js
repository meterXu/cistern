import React from 'react';
import './index.css'
import ListContainer from "../ListContainer";
class Index extends React.Component {
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
export default Index
