import React, { useState } from 'react'

export default function Textform(props) {
    const [text, settext] = useState('');  // state

    const handleUptext = () => {
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert('converted to upper case','success')
    }
    const handlelotext = () => {
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert('converted to lower case','success')
    }
    const handletoClear = () => {
        let newText = '';
        settext(newText);
        props.showAlert('Text cleared','success')
    }

    const handleToChange = (event) => {
        // console.log(event.target.value);
        settext(event.target.value)
    }
    const handletoUnder = () => {
        // let newText = text;
        document.getElementById('under').innerHTML = `<u>${text}</u>`
        props.showAlert('text underlined','success')
    }
    const handleSelect = () => {
        let text = document.getElementById('textform');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('copied to clipboard','success')
    }

    const handleExtraSpaces = () => {
        const newText = text.split(/[ ]+/)  // '/[]+/' this is known as regular expression literal in js anything inside / /
        // const reg = /[ ]+/
        // console.log(reg.source);
        settext(newText.join(" "));
        props.showAlert('extra spaces removed','success')
    }
    return (
        <>
            <div className="container">
                <div className="mb-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <label htmlFor="textform" className="form-label " > <h4 className='my-3' >Example textarea</h4> </label>
                    <textarea className="form-control" id="textform" rows="8" value={text} onChange={handleToChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white', }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUptext}> UPPER</button>
                <button className="btn btn-primary mx-1" onClick={handlelotext}> LOWER</button>
                <button className="btn btn-primary mx-1" onClick={handletoUnder}> Underline</button>
                <button className="btn btn-primary mx-1" onClick={handletoClear}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleSelect}>Copy</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
                <p>{text.split(' ').length} words and {text.length} characters </p>
                <h4 className='my-1'>Preview</h4>
                <p id='under'>{text}</p>
            </div>
        </>
    )
}
