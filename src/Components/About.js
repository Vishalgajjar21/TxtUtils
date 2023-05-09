import React, { useState } from 'react';

export default function About(props) {
    
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'rgb(15 25 61)'
    });

    const [btntext, setBtntext] = useState("Enable Light mode");
    const toggleStyle = () => {

        if (myStyle.color === 'rgb(15 25 61)') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'rgb(15 25 61)',
                border: '1px solid white'
            })
            setBtntext("Enable Light mode")
            props.showAlert("Dark mode has been enabled", "success");
        } else {
            setMyStyle({
                color: 'rgb(15 25 61)',
                backgroundColor: 'white',
                border: '1px solid black'
            })
            setBtntext("Enable Dark mode")
            props.showAlert("Light mode has been enabled", "success");

        }
    }

    return (
        <div className='container' style={myStyle} >
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                             About TextUtils #1 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" >
                            <strong>How to convert your text:</strong> Insert your text in the textbox to covert your text in Uppercase , Lowercase ,Clearscreen,Copytext,and also Remove extra spaces between two words in less than one second.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        About TextUtils #2  
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" >
                            <strong>Your Summary:</strong> Your summary shows you how many Words & Characters you have used in textbox,also it shows how much time it will take you to read that sentence, you will also get preview of your text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        About TextUtils #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Dark & Light mode options:</strong> You can set the lighting modes with the Navbar.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </div>
    );
}
