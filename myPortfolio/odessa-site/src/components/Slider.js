import React from 'react';
import operaTheater from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/wepik-export-20230521115408LEpx.png'
import odessaStreet from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/odessa-2560900_1920.jpg'
import castle from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/977d3913-5162-4759-b4ed-e3098b40cf71.jpg'
import 'jquery'
import odessa from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/odessa-2577800.jpg'


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
        <div className='slider_line'>
          <img className='slider_img' src={odessa} />
          <img className='slider_img' src={odessaStreet} />
          <img className='slider_img' src={castle} />
        </div>

        <button className='slider_btn-prev'>Prev</button>
        <button className='slider_btn-next'>Next</button>

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