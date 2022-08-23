import React from 'react'

export default function Test() {
    const handleClick =(e)=>{

        console.log(e.target.parentElement.parentElement.children[0].attributes.title.value);
    }
  return (
    <div >
        <ul id='test'>
            <li title='pasta'>hello</li>
            <li>hi</li>
            <li>xsdf</li>
            <li>asd</li>
            <li><button onClick={handleClick}>click</button></li>
        </ul>
    </div>
  )
}
