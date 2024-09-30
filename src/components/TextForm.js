import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpclick = () => {
        let a = text.toUpperCase()
        setText(a)
    }
    const handledownclick = () => {
        let a = text.toLowerCase()
        setText(a)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    const [btntext, setBtnText] = useState("Enable To Dark Mode")
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });
    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setBtnText("Enable To Dark Mode")
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText("Enable To White Mode")
        }
    }
    const handlecopy = () => {
        const text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        alert("Copied to clipboard")
    }
    const handleClearText = () => {
        const text = document.getElementById("myBox").value;
        const newText=text.split(/[  ]+/)
        setText(newText.join(" "))
        console.log(text) 
    }
    return (
        <>
            <div className='container'  style={{color:props.mode=== 'dark'?'white':'black'}} >
                <h1 className='mt-2'>{props.heading}</h1>
                <div className="mb-1 mt-4" >
                    <textarea className="form-control " onChange={handleOnChange} style={{backgroundColor:props.mode=== 'light'?'white':'black',color:props.mode=== 'dark'?'white':'black'}} value={text} id="myBox" rows="10" ></textarea>
                </div>
            </div >
            <div className='mt-3 container ' style={{color:props.mode=== 'dark'?'white':'black'}}>
                <button className="btn btn-primary" onClick={handleUpclick} type="button">Convert to UpperCase </button>
                <button className="btn btn-primary m-3" onClick={handledownclick} type="button">Convert to Lower Case</button>
                <button className="btn btn-primary m-3 " onClick={toggleStyle} type="button">{btntext}</button>
                <button className="btn btn-primary m-3" onClick={handlecopy} type="button">Copy to Clipboard </button>
                <button className="btn btn-primary m-3" onClick={handleClearText} type="button"> Remove Extra Spaces </button>
            </div>
            <div className="container mt-2" style={{color:props.mode=== 'dark'?'white':'dark'}}>
                <h1>your summary here</h1>
                <p>{text.split(" ").length}Words {text.length}Characters</p>
                <p>{0.008 * text.split("").length}min</p>
                <p>{text}</p>
            </div>
        </>
    )
}


