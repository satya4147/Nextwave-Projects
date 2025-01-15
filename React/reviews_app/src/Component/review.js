// Write your code here

import {Component} from 'react'
import './review.css'
class ReviewsCarousel extends Component {
  state = {
    searchReview: 0,
  }

  onRightClickArrow = () => {
    const {searchReview} = this.state
    const {reviewsList} = this.props

    if (searchReview < reviewsList.length - 1) {
      this.setState(prevState => ({
        searchReview: prevState.searchReview + 1,
      }))
    }
  }

  onClcikLeftArrow = () => {
    const {searchReview} = this.state

    if (searchReview > 0) {
      this.setState(prevState => ({
        searchReview: prevState.searchReview - 1,
      }))
    }
  }

  onReviewList = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-second-container">
        <img src={imgUrl} alt={username} />
        <p className="username"> {username}</p>
        <p className="companyName"> {companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {searchReview} = this.state
    const {reviewsList} = this.props
    const cureentReview = reviewsList[searchReview]
    return (
      <div className="app-container">
        <div className="review-container">
          <h1 className="heading">Reviews</h1>
          <div className="carousel-container">
            <button
              className="arrow-button"
              type="button"
              data-testid="leftArrow"
              onClick={this.onClcikLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt=" left arrow"
              />
            </button>
            {this.onReviewList(cureentReview)}
            <button
              className="arrow-button"
              type="button"
              data-testid="rightArrow"
              onClick={this.onRightClickArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt=" right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
