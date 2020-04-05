import React, { Component } from 'react'
import ListUser from './ListUser'

export default class TableUser extends Component {
    render() {
        const { users } = this.props
        return (
            <div className="table" id="table">
                <table className="myTable" id="myTable">
                    <tbody>
                        <tr id="th">
                            <th>Tên</th>
                            <th>Địa chỉ</th>
                            <th>Điện thoại</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        {
                            users.map( (item, index) =>
                                <ListUser 
                                    editUser={this.props.editUser}
                                    deleteUser={this.props.deleteUser} 
                                    key={index} 
                                    user={item}
                                />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
