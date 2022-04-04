import React from 'react'
import { useState } from 'react'

const RatingSelect = ({select}) => {
    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return (
        <ul className='rating'>
        {Array.from({ 
            length: 10 /// Create 10 indexes with undefined values
         }, 
         (_, i) => ( // Run a map function on said indexes using v as value[undefined] and i as key)[0 to 4]
            <li key={`rating-${i + 1}`}>
                <input
                    type='radio'
                    id={`num${i + 1}`}
                    name='rating'
                    value={i + 1}
                    onChange={handleChange}
                    checked={selected === i + 1}
                />
                <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
        ))}
    </ul>
    )
}

export default RatingSelect