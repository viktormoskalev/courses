function isolatedpopup133(){
    const popup133 = document.querySelectorAll(".popup133");

    for  ( let i = 0 ; i<popup133.length;i++){
        popup133[i].addEventListener("click" ,showpopup133);
        popup133[i].addEventListener("keypress", showpopup133 )
    };
    
    function showpopup133(){
        this.classList.add("popup133-open");
    }
}

try{
    isolatedpopup133();
} catch{}




function isolatedswitchcard(){
    let cards133 = document.querySelectorAll(".card-switch");

    
    
    function switchcards(elem) {
        let windowHeight133 = window.innerHeight;
        let scrollY133 = window.scrollY || window.pageYOffset;
        let scrollPosition133 = scrollY133 + windowHeight133;
        let elementPosition133 = elem.getBoundingClientRect().top + scrollY;
           

        if (scrollPosition133 > elementPosition133) {
         elem.classList.add("animated");
        }
      }

      document.addEventListener("scroll",  function(){
       
        for(let i=0 ; i<cards133.length; i++){
            switchcards(cards133[i]);      
          }    
      } );

      for(let i=0 ; i<cards133.length; i++){
              switchcards(cards133[i]);  
            cards133[i].addEventListener("click" , function(){
            cards133[i].classList.toggle("card-switch-open");
        })
            cards133[i].addEventListener("keypress" , function(){
            cards133[i].classList.toggle("card-switch-open");
        })
      }

}


try{
    isolatedswitchcard();
} catch{}
