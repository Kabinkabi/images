const slidercontainer = document.querySelector(".slider-container")
const slideright = document.querySelector(".right-slide")
const slideleft = document.querySelector(".left-slide")
const upbutton = document.querySelector(".up-button")
const downbutton = document.querySelector(".down-button")
const slideslength = slideright.querySelectorAll("div").length

let activeSlideIndex = 0

slideleft.style.top = `-${(slideslength - 1) * 100}vh`

upbutton.addEventListener('click', ()=> changeSlide('up'))


downbutton.addEventListener('click',()=> changeSlide('down'))

const changeSlide = (direction)=>{
    const sliderheight = slidercontainer.clientHeight
    if(direction==='up'){
        activeSlideIndex++
        if(activeSlideIndex > slideslength - 1){
            activeSlideIndex =0

        }
    }

    slideright.style.transform =`translateY(-${activeSlideIndex *sliderheight}px)`
    slideleft.style.transform =`translateY(${activeSlideIndex *sliderheight}px)`
}