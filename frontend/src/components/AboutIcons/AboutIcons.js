import React from 'react'
import "./AboutIcons.css"
import AboutIconContainer from './AboutIconContainer'

function AboutIcons() {
  return (
    <div className='AboutIcons-container d-flex align-items-center justify-content-evenly gap-4 flex-wrap px-4'>
        <AboutIconContainer 
            img={'/images/icons/community.svg'}
            rating={650}
            title={"Our Clients"}
        />
        <AboutIconContainer 
            img={'/images/icons/thumbs.svg'}
            rating={980}
            title={"Projects Done"}
        />
        <AboutIconContainer 
            img={'/images/icons/rank.svg'}
            rating={12}
            title={"Years Experience"}
        />
        <AboutIconContainer 
            img={'/images/icons/loop.svg'}
            rating={240}
            title={"Repeat Orders"}
        />
    </div>
  )
}

export default AboutIcons