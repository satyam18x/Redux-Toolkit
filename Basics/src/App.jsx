import { useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount } from './redux/features/counterSlice'


const App = () => { 
  const dispatch = useDispatch()   //kaam krta hai main
  const count = useSelector((state)=>state.counter.value)    // show karta
  const [num,setNum] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
          <input value={num} type="number"onChange={(e) => { setNum(e.target.value)}} />

        <button onClick={()=>dispatch(incrementByAmount(Number(num)))}>incrementByAmount</button>
    </div>
  )
}

export default App