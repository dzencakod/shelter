let burger_icon = document.querySelector(".burger-icon");
if (burger_icon) {
    let burger_body = document.querySelector(".burger-body")
    burger_icon.addEventListener("click", () => {
        document.body.classList.toggle("_active")
        burger_icon.classList.toggle("_active");
        burger_body.classList.toggle("_active");
    })
};
let response;
let pets_object=[];
let pets_slider=[];
fetch("./json/main.json")
.then(data => {
    return data.json()
})
.then(data=> {
    for (const object of data) {
        pets_slider.push(object)
    }
    loopSlider()
})
let count1=0;
let count2=0;
let slider_container=document.querySelector(".slider__container");
let modal=document.querySelector(".modal");
let modal__cross=document.querySelector(".modal__cross");
let modal__container=document.querySelector(".modal__container")

modal__cross.addEventListener("click",()=>{
    modal.classList.toggle("_active");
    document.body.classList.toggle("_active")
})
document.querySelector(".slider__arrow_left").onclick=()=>{
    if(count1<=0){
    }else{
        count1-=1;
        count2-=1;
        loopSlider()
    }
}
document.querySelector(".slider__arrow_right").onclick=()=>{
    if(count2>=pets_slider.length-1){
    }else{
        count1+=1;
        count2+=1;
        loopSlider()
    }
}
function loopSlider(){
    for (let index = count1; index <= count2; index++) {
        let pets=pets_slider[index];
        slider_container.innerHTML="";
        slider_container.innerHTML='<div class="slider__card"><div class="slider__img"><img src="'+pets.img+'" alt=""></div><div class="slider__name">'+pets.name+'</div><div class="slider__button">Learn More</div></div>';
        document.querySelector(".slider__button").addEventListener("click",()=>{
            modal.classList.toggle("_active");
            document.body.classList.toggle("_active");
            modal__container.innerHTML='<div class="modal__img"><img src="'+pets.img+'" alt=""></div><div class="modal__text"><div class="modal__name">'+pets.name+'</div><div class="modal__about">'+pets.about+'</div><div class="modal__age">Age : '+pets.age+'</div></div>';
        })

    }
}

