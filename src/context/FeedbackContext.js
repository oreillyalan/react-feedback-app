import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext()


//creating a provider for context and state

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


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

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updatedItem) => {
        //console.log(id, updatedItem);
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedItem } : item))

    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext