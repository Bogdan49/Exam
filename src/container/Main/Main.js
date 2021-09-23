import React from 'react'
import { useState } from 'react'

function Main() {
    const [btn1, setBtn1] = useState(0)
    const [btn2, setBtn2] = useState(0)
    const [btn3, setBtn3] = useState(0)

    return (
        <div>
            <button onClick={() => setBtn1(btn1 + 1)}>Button: {btn1} </button>
            <button onClick={() => setBtn2(btn2 + 1)}>Button: {btn2} </button>
            <button onClick={() => setBtn3(btn3 + 1)}>Button: {btn3} </button>
        </div>
    )
}

export default Main
