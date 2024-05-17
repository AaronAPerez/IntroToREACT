import { useState } from 'react';
import styles from './Counter.module.css';


//This is our Counter component with a return and a export defult
const Counter = () => {

  ///we need a use state 
  const [counter, setCounter] = useState(0)

//one functions one to handle our increment 
const handleIncrement = () => {
setCounter(prevCount => prevCount + 1)

console.log(counter)
}
const handleDecrement = () => {

  //do a quick check if counter is greater than 0 decrese by 1
  if(counter > 0)
    {
      setCounter(prevCount => prevCount - 1)
      
      console.log(counter)

    }

}
//one functtion to handle our decrement


  return (
    <>
        {/* two buttons one to increment and one to decrement */}

        <button className={styles['btnPrimary']} onClick={handleIncrement}>+</button>
          <span>{counter}</span>
        <button className={styles['btnSecondary']} onClick={handleDecrement}>-</button>
        {/* render the count somewhere */}
    </>
  )
}

export default Counter