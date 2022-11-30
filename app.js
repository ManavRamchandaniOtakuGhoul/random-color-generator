let colorBtn = document.querySelector("#btn");
let boxes = document.querySelectorAll(".box");

let running = false;

function randomColor() {
  let letters = "0123456789ABCEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function start() {
  if (running) {
    boxes.forEach((color) => {
      color.style.background = randomColor();
    });

    setTimeout(start, 500);
  }
}

colorBtn.addEventListener("click", function () {
  colorBtn.innerHTML = "Stop";

  if (running) {
    running = false;
    colorBtn.innerHTML = "change color";
  } else {
    running = true;
    start();
  }
});
