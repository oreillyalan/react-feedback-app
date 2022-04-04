import React from 'react'
import PropTypes from 'prop-types'
const FeedbackStats = ({feedBack}) => {
    // Calculate Ratings Average
    let average = feedBack.reduce((sum, feedBackItem) => {
        return sum + feedBackItem.rating
    }, 0) / feedBack.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
        <h4>{feedBack.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedBack: PropTypes.array.isRequired
}
export default FeedbackStats