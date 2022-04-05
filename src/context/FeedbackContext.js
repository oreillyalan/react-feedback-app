import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext()


//creating a provider for context and state

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (item) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(
                (eachItem) => eachItem.id !== item.id
            ))
        }
    }

    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback, ...feedback]) //create a nw array of the old items and my new one
        //console.log('App', newFeedback);
    }


    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext