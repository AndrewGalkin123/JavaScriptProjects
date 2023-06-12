import React from 'react';
// import logo from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/logo.png';

import odessaStreet from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/odessa-2560900_1920.jpg'
import castle from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/977d3913-5162-4759-b4ed-e3098b40cf71.jpg'
import 'jquery'
import odessa from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/odessa-2577800.jpg'
import pointer from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/pointer.png'


class Slider extends React.Component {
  componentDidMount() {
    const sliderImages = document.querySelectorAll('.slider_img'),
      sliderLine = document.querySelector('.slider_line'),
      sliderDots = document.querySelectorAll('.slider_dot'),
      sliderBtnNext = document.querySelector('.slider_btn-next'),
      sliderBtnPrev = document.querySelector('.slider_btn-prev')
    let sliderCount = 0,
      sliderWidth

    window.addEventListener('resize', showSlide)
    sliderBtnNext.addEventListener('click', nextSlide)
    sliderBtnPrev.addEventListener('click', prevSlide)

    function showSlide() {
        sliderWidth = document.querySelector('.slider').offsetWidth
        sliderLine.style.width = sliderWidth * sliderImages.length + 'px'
        sliderImages.forEach(item => item.style.width = sliderWidth + 'px')

        rollSlider();
    }
    showSlide()
    function nextSlide(){
      sliderCount++
      if(sliderCount >= sliderImages.length) sliderCount = 0

      rollSlider();
      thisSlide(sliderCount);
    }
    function prevSlide(){
      sliderCount--
      if(sliderCount < 0) sliderCount = sliderImages.length - 1

      rollSlider();
      thisSlide(sliderCount);
    }

    function rollSlider(){
      sliderLine.style.transform =  `translateX(${-sliderCount * sliderWidth}px)` 
    }

    function thisSlide(index){
      sliderDots.forEach(item => item.classList.remove('active-dot'))
      sliderDots[index].classList.add('active-dot')
    }

    sliderDots.forEach((dot, index) => {
      dot.addEventListener('click', () => { 
        sliderCount = index
        rollSlider()
        thisSlide(sliderCount)
      })
    })

  }
  render() {
    return (
      <div className='slider'>
        {/* <img src={logo} style={{position : "absolute", zIndex: "4", width: "500px", top: "40%", left: "50%" , transform: "translate(-50%, -40%)"}}></img> */}
        <div className='slider_line'>
          <img className='slider_img' src={odessa} alt='odessa'/>
          <img className='slider_img' src={odessaStreet}  alt='odessa-street'/>
          <img className='slider_img' src={castle} alt='odessa-castle'/>
        </div>
      
        <button className='slider_btn-prev'><img src={pointer} alt='pointer'></img></button>
        <button className='slider_btn-next'><img src={pointer} alt='pointer'></img></button>
        

        <div className='slider_wrapper'>
          <div className='slider_dot active-dot'></div>
          <div className='slider_dot'></div>
          <div className='slider_dot'></div>
        </div>
      </div>
    )
  }
}

export default Slider;