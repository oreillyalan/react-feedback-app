import { useContext } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
// import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    //console.log(feedBack)

    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No FeedbacK Yet</p>
    }


    return (
        <div className="feedback-list">
            <AnimatePresence>
           {feedback.map((item) => (
               <motion.div 
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity:0}}>
                    <FeedbackItem 
                    key={item.id} 
                    item={item} 
                     />
               </motion.div>
           )) }</AnimatePresence>
        </div>
      )

//     return (
//     <div className="feedback-list">
//        {feedBack.map((item) => (
//            <FeedbackItem 
//            key={item.id} 
//            item={item} 
//            handleDelete={handleDelete} />
       
//        )) }
//     </div>
//   )
}


// FeedbackItem.propTypes = {
//     feedBack: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     ),
// }


export default FeedbackList