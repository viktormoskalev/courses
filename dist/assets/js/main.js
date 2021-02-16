//zoom effect on blueprints
let bricks = document.querySelectorAll(".scale__brick");
let blocks = document.querySelectorAll(".scale__block");

let block = [...blocks];

block.forEach((item) => {
  item.addEventListener("click", function (e) {
    target = e.target;
    if (target.classList.contains("quarter-top-left")) {
      target.classList.add("active", "activeTopLeft");
    } else if (target.classList.contains("quarter-top-right")) {
      target.classList.add("active", "activeTopRight");
    } else if (target.classList.contains("quarter-bottom-left")) {
      target.classList.add("active", "activeBottomLeft");
    } else if (target.classList.contains("quarter-bottom-right")) {
      target.classList.add("active", "activeBottomRight");
    } else {
      item
        .querySelectorAll("div")
        .forEach((div) =>
          div.classList.remove(
            "active",
            "activeTopLeft",
            "activeTopRight",
            "activeBottomLeft",
            "activeBottomRight"
          )
        );
    }
  });
});

//flipped card
let cards = document.querySelectorAll(".flip-card");

for (let card of cards) {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
}

