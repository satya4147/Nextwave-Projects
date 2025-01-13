// Write your code here
import {Component} from 'react'
import './index.css'
class Destinationltem extends Component {
  render() {
    const {listItems} = this.props
    const {name, imgUrl} = listItems
    return (
      <li className="card-container">
        <img src={imgUrl} alt={name} className="images" />

        <p>{name}</p>
      </li>
    )
  }
}

export default Destinationltem
