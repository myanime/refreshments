import React from 'react';
import {connect} from 'react-redux'
import {addItem} from '../actions/addItem'
import axios from 'axios'

const AddStuff = ({dispatch}) => {
  let input
  const handleSubmit = (event) => {
    event.preventDefault()
    sendToFirebase()
    if (!input.value.trim()) {
      return
    }
  }
  const sendToFirebase = async () => {
    const response = await axios({
      method: 'get',
      url: 'https://ryanbase-cefdb.firebaseio.com/custom/-Kl6-0gHEhIDN2AnZcLX.json'
    })
    const data = response.data
    dispatch(addItem(data.email))
    input.value = data.email
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

export default connect()(AddStuff)