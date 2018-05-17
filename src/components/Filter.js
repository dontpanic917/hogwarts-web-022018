import React, { Component } from 'react'

class Filter extends Component {
  render(){
    return(
      <div>
        <input id="isGreased" type="checkbox" onChange={this.props.onGreasedChange} />
        <select onChange={this.props.onSortChange}>
          <option value="weight">weight</option>
          <option value="name">name</option>
        </select>
      </div>
    )
  }
}
export default Filter
