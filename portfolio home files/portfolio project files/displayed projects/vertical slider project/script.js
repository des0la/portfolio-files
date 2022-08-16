const slidercontainer = document.querySelector('.slidercontainer');
const slideleft = document.querySelector('.leftslide');
const slideright = document.querySelector('.rightslide');
const upbutton = document.querySelector('.upbutton');
const downbutton = document.querySelector('.downbutton');
const slideslength = slideright.querySelectorAll('div').length;



let activeslideindex = 0;

slideleft.style.top = `-${(slideslength - 1)* 100}vh`

upbutton.addEventListener('click',() => changeSlide('up'))
downbutton.addEventListener('click',() => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderheight = slidercontainer.clientHeight;
       if(direction === 'up'){
           activeslideindex++ 
        if(activeslideindex > slideslength -1){
            activeslideindex = 0;
        }
    }

        slideright.style.transform = `translateY(-${activeslideindex * sliderheight}px)`
        slideleft.style.transform = `translateY(${activeslideindex * sliderheight}px)`

               if(direction === 'down'){
                   activeslideindex--
                if(activeslideindex < 0){
                    activeslideindex = slideslength-1;
                }
            }
        
                slideright.style.transform = `translateY(-${activeslideindex * sliderheight}px)`
                slideleft.style.transform = `translateY(${activeslideindex * sliderheight}px)`
                
        }
        




