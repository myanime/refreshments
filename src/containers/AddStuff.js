import React from 'react';
import {connect} from 'react-redux'
import { addItem, printSwearWord } from '../actions/addItem'
import {getEmail} from "../actions/index";

@connect()
const AddStuff = ({dispatch}) => {
  let input
  const handleSubmit = (event) => {
    event.preventDefault()
    sendToFirebase()
    if (!input.value.trim()) {
      return
    }
  }
  const sendToFirebase = () => {
      dispatch(printSwearWord())
      dispatch(getEmail())
      dispatch(addItem("Goofel"))
    input.value = "good night"
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={node => input = node}/>
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
}

export default AddStuff