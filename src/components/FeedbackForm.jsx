import React from 'react'
import { v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState('')

  const handleTextChange = (e) => {
    if(text === ''){
        setBtnDisabled(true)
        setMessage(null)
    }else if(text !== '' && text.trim().length <= 10) {
        setMessage('Review must be at least 10 characters')
        setBtnDisabled(true)
        //console.log(text.trim().length);
        
    }else {
        setMessage(null)
        setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
        const newFeedback = {
            id: uuidv4(),
            text,
            rating
        }    
        handleAdd(newFeedback)
        setText('')
        //console.log('Feedback Form', newFeedback)
    }
  }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us</h2>
            <RatingSelect select={(rating) => setRating(rating) } />
            <div className="input-group">
                <input 
                onChange={handleTextChange} 
                type="text" 
                placeholder='Write a review' 
                value = {text}
                />
                <Button 
                type='submit'
                isDisabled={btnDisabled}> Send </Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm