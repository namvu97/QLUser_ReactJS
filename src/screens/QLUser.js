import React, { Component } from 'react'
import TopApp from '../components/TopApp'
import AddUser from '../components/AddUser'
import EditUser from '../components/EditUser'
import TableUser from '../components/TableUser'

export default class QLUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.id,
      addScreen: false,
      userData: [],
      editUser: {
        editScreen: false,
        user: {
          id: '',
          name: '',
          phone: '',
          address: '',
          email: ''
        }
      }
    }
  }

  componentDidMount() {
    if(!localStorage.getItem(`userData ${this.state.id}`)) {
      localStorage.setItem(`userData ${this.state.id}`, JSON.stringify(this.state.userData))
    }
    let data = localStorage.getItem(`userData ${this.state.id}`)
    this.setState({
        userData: JSON.parse(data)
    })
  }

  callbackFunction = (callback) => {
    this.setState({
      addScreen: callback
    })
  }

  createNewUser = (newUser, userId = '') => {
    let newData = this.state.userData.filter( (item) => item.id === userId);
    if(newData.length){

    }else{
      let newData = this.state.userData;
      newData.push(newUser);
      localStorage.setItem(`userData ${this.state.id}`, JSON.stringify(newData));

      this.setState({
        addScreen: false,
        userData: newData
      })
    }

  }

  cancelClick = () => {
    this.setState({
      addScreen: false
    })
  }

  editUser = (userId) => {
    let editUser = this.state.userData.find( (item) => item.id === userId);
    this.setState({
      editUser: {
        user: editUser,
        editScreen: true
      }
    })
  }

  updateUser = (updateUser) => {
    let newUser = this.state.userData.map( item => item.id === updateUser.id ? { id: item.id, name: updateUser.name, address: updateUser.address, phone: updateUser.phone, email: updateUser.email} : item );
    this.setState({
      userData: newUser,
      editUser: {
        editScreen: false
      }
    })
    localStorage.setItem(`userData ${this.state.id}`, JSON.stringify(this.state.userData));
  }

  deleteUser = (userId) => {
    let newData = this.state.userData.filter( (item) => item.id !== userId);
    localStorage.setItem(`userData ${this.state.id}`, JSON.stringify(newData));
    this.setState({
      userData: newData
    })
  }

  searchUser = (userName) => {
    let currentUserData = JSON.parse(localStorage.getItem(`userData ${this.state.id}`));
    let result = currentUserData.filter( item => item.name.indexOf(userName) > -1 )
    this.setState({
      userData: result
    })
  }

  render() {
    return (
        <div className="main">
          <TopApp searchUser={this.searchUser} handleClick= {this.callbackFunction}/>
            { this.state.addScreen ? <AddUser cancelClick={this.cancelClick} editUser={this.state.editUser} createNewUser={this.createNewUser}/> : <></> }
            { this.state.editUser.editScreen ? <EditUser updateUser={this.updateUser} currentUser={this.state.editUser} /> : <></>}
          <TableUser editUser={this.editUser} deleteUser={this.deleteUser}  users={this.state.userData}/>
        </div>
    )
  }
}