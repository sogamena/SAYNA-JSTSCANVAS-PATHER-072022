document.querySelector("#show").addEventListener("click", function(){
    document.querySelector("#confirme").classList.add("active");
})

document.querySelector("#confirme .btn-fermer").addEventListener("click", function(){
    document.querySelector("#confirme").classList.remove("active");
})


window.onload = ()=>{
   let myForm = document.getElementById('myForm');
   myForm.addEventListener('submit', function(e){
       e.preventDefault();
       document.getElementById('confirme').style.display = 'block';
       window.scrollTo(top);
   })
}

document.querySelectorAll('.chala-texte').addEvent{
    let chalas=document.querySelectorAll('.chala-texte');
    for(let i=0;i<chalas.length; i++){
        let windowheight=window.innerHeight;
        let chalaleft = chalas[i].getBoundingClientRect().top;
        let chalaspointe = 150;
        if(chalaleft < windowheight - chalaspointe){
            chalas[i].classList.add('active');
        }
        else{
            chalas[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', chala);
