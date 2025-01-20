import { useState } from "react";
import Counter1 from "./counter1";
import Counter3 from "./counter3";


function Counter2() {
    const [count, setCount] = useState(0)
    

    let handleIncrement = () => {
        
        setCount(count + 1);
    
    }

    let handleDecrement = () => {
        
        setCount(count - 1)
      
    }

    return (
        <>
        <h1 className="v1">Counters</h1>
            <div className="counters">
                    <Counter1 num={count}/>
                <div className="counter-card center-card">
                    <button onClick={handleIncrement}>Increment</button>
                    <h1>{count}</h1>
                    <button onClick={handleDecrement}>Decrement</button>
                    
                </div>
                    <Counter3 num={count}/>
            </div>
        </>
    )
}

export default Counter2