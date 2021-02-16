

function figuresnewzoom(){
    let x = 0;
    let y = 0;
    let images = document.querySelectorAll(".zoom-img");
    
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", zoom);
    }
    
    function zoom(event) {
        var rect = event.target.getBoundingClientRect();
        x = event.offsetX / rect.width;
        y = event.offsetY / rect.height;
    
        let ox = " ";
        let oy = " ";
    
    
        if (x < 0.5) {
            ox = "0 "
        } else {
            ox = "100% ";
        }
        if (y < 0.5) {
            oy = 0
        } else {
            oy = "100% ";
        }
        this.classList.toggle('zoom-img-open');
        if (this.classList.contains("zoom-img-open")) {
            this.style.transformOrigin = ox + oy;
        }
    }
}
figuresnewzoom()