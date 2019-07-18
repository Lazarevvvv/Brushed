

let images = document.querySelectorAll('.section__slaider-img img');
let sliderList = document.querySelectorAll('.slider__list li a');
let current = 0;

function slider(){
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('active_slider');
    }
    for (let a = 0; a < sliderList.length; a++) {
        sliderList[a].classList.remove('active_list');
    }
    images[current].classList.remove('active_slider');
    sliderList[current].classList.add('active_list');
}

document.querySelector('.slider__list').onclick = function(e){
    if(e.target.classList.contains('slider__list')){
    }
    else{
        var id = e.target.id;
        current = id;
        slider();
    }
}



function sliderLeft(){
    if (current-1 == -1) {
        current = images.length-1;
    }
    else{
        current--;
    }
    slider();
}
function sliderRight(){
    if (current+1 >= images.length) {
        current = 0;
    }
    else{
        current++;
    }
    slider();
}
setInterval(sliderRight, 10000);
document.querySelector('.left').onclick = sliderLeft;
document.querySelector('.right').onclick = sliderRight;
