import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedBack, handleDelete}) {
    //console.log(feedBack)

    if(!feedBack || feedBack.length === 0) {
        return <p>No FeedbacK Yet</p>
    }

    return (
    <div className="feedback-list">
       {feedBack.map((item) => (
           <FeedbackItem 
           key={item.id} 
           item={item} 
           handleDelete={handleDelete} />
       
       )) }
    </div>
  )
}


FeedbackItem.propTypes = {
    feedBack: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
}


export default FeedbackList