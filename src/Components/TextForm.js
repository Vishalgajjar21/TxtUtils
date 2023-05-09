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
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Screen</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove ExtraSpace</button>


            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(15 25 61)' }}>
                <h2>Your text summary here</h2>
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} Words and {text.replace(/\s+/g, '').length} Characters</p>
                {/* <p>{text.split("").join('').length} Words and {text.length} Characters</p> */}
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview Your Text</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>

            </div>
        </>
    );
}
