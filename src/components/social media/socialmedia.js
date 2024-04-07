import React from 'react'
import './socialmedia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function SocialMedia(){
    return(
        <div className='icons'>
            <a href='https://www.linkedin.com/in/felipe-dhein-4a89bb252/' className='icon icon--linkedin' target='blank'>
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href='https://github.com/NappS5' className='icon icon--github' target='blank'>
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='https://api.whatsapp.com/send?phone=5554997006436' className='icon icon--whatsapp' target='blank'>
            <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </div>
    )
}

export default SocialMedia