import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper click was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have clicked on handleUpClick" + text);
        props.showAlert("Converted to Uppercase!","success");
    }
    
    const handleLowClick = () => {
        // console.log("Upper click was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");

    }

    const handleClearClick = () => {
        console.log("Clear was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success");

    }


    const handleOnChange = (event) => {
        // console.log("Upper click was clicked");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleExtraSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed!","success");

    }

    const [text, setText] = useState('');
    // setText("hello");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'rgb(15 25 61)' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroudColor: props.mode === 'dark' ? 'gray' : 'white',
                        color: props.mode === 'dark' ? 'black' : 'rgb(15 25 61)'
                    }} id="myBox" rows="10"></textarea>
                </div>
                
                <button  disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase </button>
                <button  disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase </button>
                <button  disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Screen</button>
                <button  disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button  disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove ExtraSpace</button>


            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(15 25 61)' }}>
                <h2>Your text summary here</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview Your Text</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>

            </div>
        </>
    );
}
