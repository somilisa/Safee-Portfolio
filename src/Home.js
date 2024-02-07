import React from 'react'
import './Home.scss'
import back from './Assets/back2x.png'
import back2 from './Assets/back.png'

function Home({title,home}) {
  return (
<section>
          {Home && <div className='back'>
          <img src={back} alt=""/>  
          </div> }         
          <div className='content'>
            <h2>{title}</h2>
            <div className='contact'>
              <div className='intro'>
                <p>Adesina Sofiat</p>
                {home && <p>Product (UI/UX) Designer</p>}
                <p>adesinasafee@gmail.com</p>
              </div>
              {!home && <ul className='contact-links'>
                <li><a href='behance.net/Safeeee'>behance</a></li>
                <li><a href='#'>twitter</a></li>
                <li><a href='https://ng.linkedin.com/in/sofiat-adesina-02546a241'>linkedIn</a></li>
              </ul>}
            </div>
          </div>
          {/* {!home && <div className='back_2'>
            <img src={back2} alt=''/>
          </div>} */}
        </section>  )
}

export default Home