const image = document.querySelectorAll(`.image.carrousel`);
const nextBtn = document.querySelector(`.control-unit.next`);
const prevBtn = document.querySelector(`.control-unit.previous`);



nextBtn.addEventListener(`click`, nextImage);

function nextImage() {
    let activeImageID = -3;
    let nxtImg;
    for (let i = 0; i < image.length; i++) {
        const chkImg = image[i];
        if (chkImg.classList.contains(`active`)) {
            activeImageID = i;
            nxtImg = activeImageID + 1;
        }
        if (nxtImg >= image.length){
            nxtImg = 0;
        }
    }
    image[activeImageID].classList.remove('active');
    image[nxtImg].classList.add('active');
};
console.log(nextBtn)

prevBtn.addEventListener(`click`, prevImage);

function prevImage(){
    let activeImageID = -3;
    let nxtImg;
    for (let i = 0; i < image.length; i++) {
        const chkImg = image[i];
        if(chkImg.classList.contains(`active`)){
            activeImageID = i;
            nxtImg = activeImageID - 1;
        }
        if(nxtImg < 0){ 
            nxtImg = image.length -1;
        }
        
        
    }
    image[activeImageID].classList.remove('active');
    image[nxtImg].classList.add('active');
    console.log(nxtImg);
    console.log(activeImageID);
};

/*
const allImage = [
   `img/bbb, `img/hhh`, `img/aaa`,
];
const image = document.querySelectorAll(`.image.carrousel`);
const nextBtn = document.querySelector(`.control-unit.next`);
const prevBtn = document.querySelector(`.control-unit.previous`);
let aImage = 0;
let image = document.querySelector(.image.carrousel);

nextBtn.addeventlistener(`click`, nextImage);

function nextImage(){
    aImage++
    if(aImage > 3){
        aImage[0]
    }
    image.scr = allImage[aImage];
}

function prevImage(){
    aImage--
    if(aImage < 3){
        aImage[3]
    }
    image.scr = allImage[aImage];
}

*/
