import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import Hogs from '../porkers_data.js'
import HogIndex from './HogIndex.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: Hogs,
      displayHogs: Hogs,
    }
    this.onGreasedChange = this.onGreasedChange.bind(this)
  }
  onSortChange = (event) => {
    console.log(event.target.value)

    const arr = this.state.displayHogs


    if(event.target.value === 'name')
      arr.sort((a,b) =>{if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    else
      arr.sort((a,b) =>{if(a.weight < b.weight) return -1;
        if(a.weight > b.weight) return 1;
        return 0;
      })


    this.setState({
      displayHogs: arr

    },  console.log(event.target.value))
  }
  onGreasedChange = (event) => {
    event.persist()
    this.setState({
      displayHogs: event.target.checked ?
      this.state.hogs.filter(hog => hog.greased)
      : this.state.hogs
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
          < Nav />
          < Filter onGreasedChange={this.onGreasedChange} onSortChange={this.onSortChange}/>
          < HogIndex hogs={this.state.displayHogs}/>
      </div>
    )
  }
}

export default App;
