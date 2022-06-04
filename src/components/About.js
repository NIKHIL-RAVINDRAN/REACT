import React from 'react'


export default function About(props) {

let myStyle ={
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'black':'white'
} 
let setStyle ={
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'#11143e':'white'
}
let getStyle ={
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'#2d2868':'#dee0ee'
}
  return (
      <div className='container' style={setStyle}>
          <h1 className='my-3'> About Us</h1>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" style={getStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>DEVELOPMENT HISTORY</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          I tried to create simple application TEXTOOLS through React JS to check my overall command on it.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" style={getStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>USE OF TEXTOOLS</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TEXTOOLS is the perfect and easy to use application which can be used for editing of paragraphs,words etc also it provides voice read feature.  
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" style={getStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>FREE TO USE AND COMPATIBILITY</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        It is completely free to use application and compatible on any browsers due to the responsiveness of this application 
        </div>
      </div>
    </div>
      </div>
  </div>
  )
}
