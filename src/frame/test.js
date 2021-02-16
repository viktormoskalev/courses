boddddy =document.querySelector("body");

 boddddy.addEventListener("click" , function(e){
  
    console.log(e.target);
    e.target.classList.toggle('test-class');
    all = document.querySelectorAll("*");
    console.log(all);
    console.log(all[3]);
   

 })

