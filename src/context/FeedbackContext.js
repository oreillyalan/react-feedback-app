import { createContext, useState, useEffect } from "react";
// import FeedbackData from "../data/FeedbackData";
// import { feedback } from db.json
const FeedbackContext = createContext()


//creating a provider for context and state

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
        // console.log("Use Effect");
    }, [])

    const fetchFeedback = async () => {

        const response = await fetch(`http://localhost:5000/feedback`)
        //console.log(response)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback, ...feedback]) //create a nw array of the old items and my new one
        //console.log('App', newFeedback);
    }

    const deleteFeedback = (item) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(
                (eachItem) => eachItem.id !== item.id
            ))
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updatedItem) => {
        //console.log(id, updatedItem);

        //While merging objects, if a key already present then it is replaced by last object with same key.
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedItem } : item))

    }

    return <FeedbackContext.Provider value={{
        feedback, feedbackEdit, isLoading,
        deleteFeedback, addFeedback, editFeedback, updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext