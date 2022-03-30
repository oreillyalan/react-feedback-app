import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

const App = () => {
    const [feedBack, setFeedback] = useState(FeedbackData)
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedBack={feedBack} />
            </div>

        </>
    )
}

export default App