import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.currentUser.user.id,
            name: this.props.currentUser.user.name,
            address: this.props.currentUser.user.address,
            phone: this.props.currentUser.user.phone,
            email: this.props.currentUser.user.email,
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        let editUser = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            email: this.state.email
        }
        
        this.props.updateUser(editUser);
    }

    cancelClick = (event) => {
        event.preventDefault();
        this.props.handleClick(0);
    }

    handleChanged = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { id, name, address, phone, email } = this.state;
        return (
            <div className="addUser">
                <div className="formUser" id="form-user">
                    <form>
                        <input className="id" id="id" hidden type="text" placeholder={id}/>
                        <p>
                            <label>Họ tên</label>
                            <input onChange={this.handleChanged} className="name" type="text" name="name" id="name" value={name} />
                        </p>
                        <p>
                            <label>Địa chỉ</label>
                            <input onChange={this.handleChanged} className="name" type="text" name="address" id="address" value={address} />
                        </p>
                        <p>
                            <label>Số điện thoại</label>
                            <input onChange={this.handleChanged} className="phone" type="text" name="phone" id="phone" value={phone} />
                        </p>
                        <p>
                            <label>Email</label>
                            <input onChange={this.handleChanged} className="email" type="email" name="email" id="email" value={email} />
                        </p>
                        <p>
                            <button onClick={this.onSubmit} className="oke" id="Oke">Oke</button>
                            <button onClick={this.cancelClick} className="cancel" id="Cancel">Cancel</button>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}
