import React, { Component } from 'react'

export default class ListUser extends Component {
    onClickEditUser = () => {
        this.props.editUser(this.props.user.id)
    }
    onClickDeleteUser = () => {
        this.props.deleteUser(this.props.user.id)
    }

    render() {
        const { user } = this.props;
        const id = `${user.name} - ${user.phone} `
        return (
            <tr id={id}>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick={this.onClickEditUser} className="edit" id="edit">Edit</button>
                    <button onClick={this.onClickDeleteUser} className="delete" id="delete">Delete</button>
                </td>
            </tr>
        )
    }
}
