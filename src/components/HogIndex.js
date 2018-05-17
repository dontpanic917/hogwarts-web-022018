import React, {Component} from 'react'
import Hog from './Hog.js'

class HogIndex extends Component {
  hogMapper = () => {
    // const newUrl =  `../hog-imgs/${this.props.hog.name.replace(' ', '_').toLowerCase()}.jpg`
    return this.props.hogs.map( (hog) => {
      const newUrl =  hog.name.split(" ").join("_").toLowerCase()
      return <Hog hog={hog} img={newUrl}/>
    }
  )}
  render = () => {
    return(
      <div>
        {this.hogMapper()}
      </div>
    )
  }
}
export default HogIndex
