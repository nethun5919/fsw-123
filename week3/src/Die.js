 import React, {Component} from 'react'
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
  import {faDiceOne, faDiceTwo,faDiceThree, faDiceFour,faDiceFive,faDiceSix} from '@fortawesome/free-solid-svg-icons'



  class Die extends Component{
  render(){
   var number = faDiceOne
      console.log(this.props.face)
    console.log(this.props.rolling) 
    if (this.props.face==="one") {
      number= faDiceOne
    }else  if (this.props.face==="two") {
      number= faDiceTwo
    }else if (this.props.face==="three") {
      number= faDiceThree
    }else  if (this.props.face==="four") {
      number= faDiceFour
    }else if (this.props.face==="five") {
      number= faDiceFive
    } else if (this.props.face==="six") {
      number= faDiceSix
     }
    return (
    <div> 
     <FontAwesomeIcon icon = {number}/>
    </div>)
  //    <i className={`Die fas fa-dice-${this.props.face}
  //             ${this.props.rolling && 'Die-shaking'}`}/>
  }
}
  
export default Die;