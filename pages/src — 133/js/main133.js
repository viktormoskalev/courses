function isolatedpopup133(){
    const popup133 = document.querySelectorAll(".popup133");

    for  ( let i = 0 ; i<popup133.length;i++){
        popup133[i].addEventListener("click" ,showpopup133);
    };
    
    function showpopup133(){
        this.classList.add("popup133-open");
    }
}
isolatedpopup133();
