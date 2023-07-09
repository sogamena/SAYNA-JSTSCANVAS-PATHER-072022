//Souris

const souris = document.querySelector(".souris");
let timeout;
document.addEventListener("mousemove",(e)=> {
    let x = e.pageX;
    let y = e.pageY;

    souris.style.top = y + "px";
    souris.style.left = x + "px";
    souris.style.display = "block";

    function sourisStop(){
        souris.style.display ="block";
    }

    timeout = setTimeout(sourisStop, 1000);

});

document.addEventListener("mouseout",() =>{
    souris.style.display = "block";
});


//////////////////////////////
//...........LOADING........./
//////////////////////////////