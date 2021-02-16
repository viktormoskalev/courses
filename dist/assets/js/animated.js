//trigger animation on view element
let elementLeft = document.getElementById("animation-from-left");
let elementZoom = document.getElementById("animation-from-zoom");
let elementRight = document.getElementById("animation-from-right");
let windowHeight = window.innerHeight;
let scrollY = window.scrollY || window.pageYOffset;
let scrollPosition = scrollY + windowHeight;

function inViewLeft() {
  let elementPosition = elementLeft.getBoundingClientRect().top + scrollY;
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function inViewZoom() {
  let elementPosition = elementZoom.getBoundingClientRect().top + scrollY;
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function inViewRight() {
  let elementPosition = elementRight.getBoundingClientRect().top + scrollY;
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function animate() {
  if (inViewLeft()) {
    elementLeft.classList.add("slideLeft");
  } 
  if (inViewZoom()) {
    elementZoom.classList.add("zoomed");
  }
  if (inViewRight()) {
    elementRight.classList.add("slideRight");
  }
}

document.addEventListener("scroll", animate);