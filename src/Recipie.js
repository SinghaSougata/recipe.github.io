import React from 'react'
import './Recipie.css'

 function Recipie({recipie}) {
  return (
    <div className='recipie'>
    <img className='recipie-img' src={recipie["recipe"]["image"]} alt=""/>
        <p className='recipie-label'>{recipie["recipe"]["label"]}</p>
    </div>
  )
}
export default Recipie