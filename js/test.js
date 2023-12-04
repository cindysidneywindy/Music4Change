const slides=document.getElementsByClassName("slide");
const texts = document.getElementById("text");
let currentSlide= 0;

const SlideButton = document.getElementById("slide-button");

let firstSlide = true;


function prevSlide(index) {
    if (currentSlide === 0){
            return (index === slides.length-1);

    }

    return (index=== currentSlide -1);


} 



let currentOffsets = []

function offsetfunction(){
    for (let i=0; i<slides.length; i++){
        currentOffsets.push(-100);
    }
}


function changeSlide(){
    console.log(slides)
    for (let i = 0; i<slides.length; i++) {
        if (firstSlide){
            slides[i].style.transition = "transform 0.5s";
            slides[i].style.transform = "translateX(-100%)";
            
            
        }
        else{
            if (prevSlide(i)){
                const maxOffset = 100*(slides.length-2);
                const initialOffset = i*100;
                slides[i].style.transition = "none";
                slides[i].style.transform = `translateX(${maxOffset-initialOffset}%)`;
                currentOffsets[i] = maxOffset-initialOffset;
                console.log(currentSlide);
                console.log(slides.length);
            }
            else{
                const currentOffset = currentOffsets[i];
                slides[i].style.transition = "transform 0.5s";
                slides[i].style.transform = `translateX(${currentOffset-100}%)`;
                currentOffsets[i] = currentOffset-100;
                console.log(currentOffsets);
            }
        }
    }

    firstSlide=false;
    
    currentSlide=currentSlide+1;
    if (currentSlide === slides.length){
        currentSlide = 0;
    }

    console.log(currentSlide);
}

offsetfunction();

// SlideButton.addEventListener("click", changeSlide);