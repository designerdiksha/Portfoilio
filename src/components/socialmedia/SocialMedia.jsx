import React from 'react'
import './socialmedia.css'

//Material Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function SocialMedia() {
    return (
        <div className='socialmedia'>
            <div className='socialmedia-icon' ><a href='https://www.linkedin.com/in/diksha-rawat7/' target="_blank" ><LinkedInIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://github.com/designerdiksha' target="_blank" ><GitHubIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://www.instagram.com/diksha.__/' target="_blank" ><InstagramIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
        </div>
    )
}

export default SocialMedia
