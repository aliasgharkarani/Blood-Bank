import React, { Component } from 'react';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'aliasgharkarani125@hotmail.com',
            Password: ''
        }
    }
    render() {
        return (
            <div>
                <input type="text" />
                <h1>{this.state.email} jcbxjxzbvj</h1>
            </div>
        )
    }
}
export default Main;