import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
// import PropTypes from 'prop-types'

const FeedbackStats = () => {


    const {feedback} = useContext(FeedbackContext)


    // Calculate Ratings Average
    let average = feedback.reduce((sum, feedBackItem) => {
        return sum + feedBackItem.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//     feedBack: PropTypes.array.isRequired
// }
export default FeedbackStats