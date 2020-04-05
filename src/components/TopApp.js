import React, { Component } from 'react'

export default class TopApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: ''
        }
    }

    addUser = () => {
        this.props.handleClick(1);
    }

    searchUser = () => {
        this.props.searchUser(this.state.name);
    }

    handleChanged = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="top">
                <input 
                    className="inputSearch" 
                    type="text" 
                    placeholder="Search by name" 
                    name="name"
                    onChange={this.handleChanged}
                />
                <button onClick={this.searchUser} className="btn-search">Search</button>
                <button onClick={this.addUser} className="btn-addUser">Add User</button>
            </div>
        )
    }
}
