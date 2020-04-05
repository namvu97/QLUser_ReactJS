import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: '',
            name: '',
            address: '',
            phone: '',
            email: ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        let newUser = {
            id: `${this.state.name} - ${this.state.phone} `,
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            email: this.state.email
        }
        
        this.props.createNewUser(newUser);
    }

    cancelClick = (event) => {
        event.preventDefault();
        this.props.cancelClick();
    }

    handleChanged = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="addUser">
                <div className="formUser" id="form-user">
                    <form>
                        <input className="id" id="id" hidden type="text" />
                        <p>
                            <label>Họ tên</label>
                            <input onChange={this.handleChanged} className="name" type="text" name="name" id="name" />
                        </p>
                        <p>
                            <label>Địa chỉ</label>
                            <input onChange={this.handleChanged} className="name" type="text" name="address" id="address" />
                        </p>
                        <p>
                            <label>Số điện thoại</label>
                            <input onChange={this.handleChanged} className="phone" type="text" name="phone" id="phone" />
                        </p>
                        <p>
                            <label>Email</label>
                            <input onChange={this.handleChanged} className="email" type="email" name="email" id="email" />
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
