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

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedBack={feedBack} />
                <FeedbackList feedBack={feedBack} handleDelete={deleteFeedback} />
            </div>

        </>
    )
}

export default App