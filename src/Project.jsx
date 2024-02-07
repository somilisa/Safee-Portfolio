import React from 'react'
import './Project.scss'

function Project({background,image,title,description,link}) {
  return (
    <div className='project-wrapper' style={{
        background,
        borderRadius: 35.36,
    }}
    ><header>
        <h4>{title}</h4>
        <p>{description}</p>
    </header>
    <div className='project-image'>
        <img src={image} alt="" />
    </div>
    </div>
  )
}

export default Project