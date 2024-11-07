import React from 'react'
import { useState } from 'react'
const User = ({name}) => {


    const [count] = useState(0);
     //BTS React still clubs all the state variables into/inside a single object only ~ similar to how React does it in class based components
     // (store inside the 'big' single object this.state)

    //useEffect hook gets triggered after initial render
  useEffect(() => {
    //Make API calls

    //trying componentWillUnmount usage - setInterval example in useEffect
    const timer = setInterval(() => {
      console.log("useless text")
    },1000);

    console.log('useEffect')

    //way to return a cleanup function from within useEffect ~ one of the ways where we are Unmounting Components in React using Hooks
    //In React, returning a function inside the useEffect hook is used for cleanup purposes. This return function is executed right before the component unmounts
    //return a function from useEffect ~ this is used here to unmount similar to usage of 'clearInterval(this.timer)' in 'componentWillUnmount(){...}' in UserClass.jsx
    //not same but this return part is kind of similar the unmounting phase with componentWillUnmount() we saw in CBCs
    return() => {
      clearInterval(timer); 
      console.log('useEffect Return, component got unmounted successfully')
    }
  }, []);
  return (
    <div className='user-card'>
        <h1>This is functional component</h1>
        <h1>Count : {count}</h1>
        <h1>Name :  {name}</h1>
        <h2>This is Mahesh</h2>
    </div>
  )
}


export default User