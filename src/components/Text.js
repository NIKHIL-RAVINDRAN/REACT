import React, {useState} from 'react'


export default function Text(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
         }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        };
    
   const [text, setText] = useState('Enter your text');
 
    return (
        <>
            <div className='container' style ={{color:props.mode ==='dark'?'#dee0ee':'black'}}>
                <h2 className='myContainer'>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode ==='dark'?'#bbc7df':'white'}} id="myBox" rows="8"></textarea> 

            </div>
                <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleSpaces}>REMOVE SPACES</button>
                <button className='btn btn-danger mx-2 my-2' onClick={speak}>VOICE-READ</button>
            </div>
            <div className='container' style ={{color:props.mode ==='dark'?'white':'#010511'}}>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <h3>PREVIEW</h3>
                <p>{text}</p>
            </div>
        </>
        )
}
