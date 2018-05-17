import React, {Component} from 'react'
class Hog extends Component {
  render(){
    console.log(this.props)
    // const url = "../hog-imgs/"
    // const newUrl =  `../hog-imgs/${this.props.hog.name.replace(' ', '_').toLowerCase()}.jpg`
    // const stuff = '../hog-imgs/'+{this.props.hog.name.replace(' ', '_').toLowerCase()}

    return(

      <div>
        <br/>
        <img src={ require( "../hog-imgs/" + this.props.img + ".jpg") } />

        <p> {this.props.hog.name} </p>
        <p> {this.props.hog.specialty} </p>
        <p> {this.props.hog.weight} </p>
        <br/>
      </div>
    )
  }
}
export default Hog
