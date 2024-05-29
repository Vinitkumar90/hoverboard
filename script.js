const container = document.getElementById("container");
let SQUARE = 500;

for (let i = 0; i < SQUARE; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setcolor(square));
  square.addEventListener("mouseleave", () => removecolor(square) );

  container.appendChild(square);
}


function setcolor(element){
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`

    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
}

function removecolor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000 '
}