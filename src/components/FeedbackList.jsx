import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedBack}) {
    //console.log(feedBack)

    if(!feedBack || feedBack.length === 0) {
        return <p>No FeedbacK Yet</p>
    }

    return (
    <div className="feedback-list">
       {feedBack.map((item) => (
           <FeedbackItem key={item.id} item={item} />
        //    <div >{item.rating}</div>
       )) }
    </div>
  )
}

export default FeedbackList