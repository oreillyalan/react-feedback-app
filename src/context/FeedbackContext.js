import { createContext, useState, useEffect } from "react";
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

        const response = await fetch(`http://localhost:5000/feedback?_sort=rating&_order=desc`)
        // console.log(response)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json();
        setFeedback([data, ...feedback]) //create a nw array of the old items and my new one
        //console.log('App', newFeedback);
    }

    const deleteFeedback = async (item) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`http://localhost:5000/feedback/${item.id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter(
                (eachItem) => eachItem.id !== item.id
            ))
        }
    }

    const editFeedback = async (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updatedItem) => {
        //console.log(id, updatedItem);
        const response = await fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })

        const data = await response.json();

        //While merging objects, if a key already present then it is replaced by last object with same key.
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))

    }

    return <FeedbackContext.Provider value={{
        feedback, feedbackEdit, isLoading,
        deleteFeedback, addFeedback, editFeedback, updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext