import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {incrementByAmount} from './counterSlice';

export default function IncrementByAmount() {
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    setUserInput(value);
  };
  const handleSubmit = () => {
    if (!isNaN(userInput)) {
      dispatch(incrementByAmount(userInput));
    }
    setUserInput('');
  };

  return (
    <div>
      <div>
        <input onChange={e => handleChange(e)} value={userInput}></input>
        <button aria-label="Increment value" onClick={() => handleSubmit()}>
          Increment
        </button>
      </div>
    </div>
  );
}
