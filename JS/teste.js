const carousel=document.querySelector(".carousel");

let isDragStar = false, prevPageX, prevScollLeft;

const dragStar = (e) =>{
    isDragStar = true;
    prevPageX = e.pageX;
    prevScollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    //console.log(e.pageX);

    if(!isDragStar) return;

    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScollLeft - positionDiff;
}

const dragStop = () => {
    isDragStar = false;
}

carousel.addEventListener("mousemove", dragStar);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousemove", dragStop);