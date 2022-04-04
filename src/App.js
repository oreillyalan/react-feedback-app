import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import About from './pages/About'

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
        FeedbackData(newFeedback)
        //console.log('App', newFeedback);
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={<>
                        <FeedbackForm handleAdd={addFeedback} />
                        <FeedbackStats feedBack={feedBack} />
                        <FeedbackList feedBack={feedBack} handleDelete={deleteFeedback} />
                    </>
                    }>
                    </Route>
                    <Route path='/about' element={<About />} />
                </Routes>
                <AboutIconLink />

            </div>

        </Router>
    )
}

export default App