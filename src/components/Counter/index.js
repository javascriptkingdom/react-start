import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    
    const itemTitle = `Harvest Gold 100% Atta Whole Wheat Bread`

    const increment = function(){
        const updatedCount = count +1
        setCount(updatedCount)
    }

    const decrement = function(){
        const updatedCount = count - 1
        setCount(updatedCount)
    }


    return(
       <div>
        <div>{itemTitle}</div>
        {
           (count !== 0 )
           ? 
           (
            <div>
                <button onClick={decrement} className="button">-</button>
                    <div>{count}</div>
                <button onClick={increment} className="button">+</button>
            </div>
           ) : (
            <button onClick={increment} className="button">Add</button>
           )
        }
           
       </div>
    )
}

export default Counter