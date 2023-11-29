import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)

    return (<div>
        <input type="number" readOnly value={count} />

        <br />
        <button onClick={() => setCount(count - 5)}>-5</button>


        <button onClick={() => setCount(count - 1)}>-1</button>

        <button onClick={() => setCount(0)}>Reset</button>

        <button onClick={() => setCount(count + 1)}>+1</button>

        <button onClick={() => setCount(count + 5)}>+5</button>

    </div>);
}

export default Counter;
