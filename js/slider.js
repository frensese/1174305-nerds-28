var buttonSliderFirst = document.querySelector(".slider-buttom-1");
var Slider = document.querySelector(".slider-expensive");

var buttonSliderSecond = document.querySelector(".slider-buttom-2");
var SliderSecond = document.querySelector(".slider-math");

var buttonSliderThrid = document.querySelector(".slider-buttom-3");
var SliderThird = document.querySelector(".slider-hight");


Slider.classList.add("slider-current");
buttonSliderFirst.classList.add("current");

buttonSliderFirst.addEventListener("click", function (evt) {
    evt.preventDefault();
    Slider.classList.add("slider-current");
    SliderSecond.classList.remove("slider-current");
    SliderThird.classList.remove("slider-current");

    buttonSliderFirst.classList.add("current")
    buttonSliderSecond.classList.remove("current");
    buttonSliderThrid.classList.remove("current");
});

buttonSliderSecond.addEventListener("click", function (evt) {
    evt.preventDefault();
    Slider.classList.remove("slider-current");
    SliderSecond.classList.add("slider-current");
    SliderThird.classList.remove("slider-current");

    buttonSliderFirst.classList.remove("current");
    buttonSliderSecond.classList.add("current");
    buttonSliderFirst.classList.remove("current");
});

buttonSliderThrid.addEventListener("click", function (evt) {
    evt.preventDefault();
    Slider.classList.remove("slider-current");
    SliderSecond.classList.remove("slider-current");
    SliderThird.classList.add("slider-current");

    buttonSliderFirst.classList.remove("current");
    buttonSliderSecond.classList.remove("current");
    buttonSliderThrid.classList.add("current");
});