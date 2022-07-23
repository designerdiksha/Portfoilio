import React from 'react'
import './hero.css'

//Assets
import hero_img from '../../assets/hero_img.png'
import hero_image from '../../assets/hero_image.png'

function Hero() {
    return (
        <>
        <div className='hero section-padding' id='home'>
            <div className='hero-content'>
                <h1 className='gradient-text'>I’m Diksha Rawat</h1>
                <h2>Interior Architect and Ui/Ux Designer</h2>
                <p>An ambitious dedicated design professional eager to gain experience in creative environment looking for new and challenging position which will utilize my experience and will contribute my further development. </p>
                <a href='#works' className='explore-btn'>Explore my works</a>

            </div>
            <div className='hero-image'>
                {/* <img src={hero_img} alt='Hero' /> */}
                <img src={hero_image} alt='Hero' />
            </div>
        </div>
        <div className='hero-scroll-animation'>
              <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
        </div>
        </>
    )
}

export default Hero
