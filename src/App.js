import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
    const [feedBack, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (item) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedBack.filter(
                (eachItem) => eachItem.id !== item.id
            ))
        }
    }

    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback, ...feedBack]) //create a nw array of the old items and my new one
        console.log('App', newFeedback);
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedBack={feedBack} />
                <FeedbackList feedBack={feedBack} handleDelete={deleteFeedback} />
            </div>

        </>
    )
}

export default App