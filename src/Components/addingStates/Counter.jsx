'use strict'
import {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(6);
    return (
        <p>My Workout Goal is: {count} days a month!</p>
    )
}

export default Counter;