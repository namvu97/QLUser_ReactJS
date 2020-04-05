import React, { Component } from 'react'
import QLUser from './screens/QLUser'
export default class App extends Component {
  render() {
    let arrayQLUser = []
    for (let i = 0; i< 100; i++) {
        arrayQLUser.push(<QLUser key={i} id={i}/>)
    }
    return (
      <>
        {arrayQLUser}
      </>
    )
  }
}