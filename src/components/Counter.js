import React, {useState} from 'react'
import Controller from './Controller'
import Details from './Details'
function Counter() {

    const [count, setCount] = useState(1)

    const handleCount = (action) =>{
        
        action === "plus" ? setCount(count + 1) : setCount(count - 1)
    }
    return (
            <div className="container">
                <div className="flex-container">
                    <div className="counter">
                        <div className="counter-main">
                            <p className="count">{count}</p>
                        </div>
                       <Controller control={handleCount}/>
                    </div>                   
            
                    <Details />
                </div>
            </div>
    )
}

export default Counter
