let gridSize = 10;
let colorMode = "color";
let drawContainer = document.getElementById("draw__container");
let gridSizeSelector = document.getElementById("grid_size_selector");
let gridSizeIndicator = document.getElementById("grid_size_indicator");
let customColorPicker = document.getElementById("custom_color_picker");
let clearButton = document.getElementById("clear_button");
let eraseButton = document.getElementById("erase_button");
let rainbowButton = document.getElementById("rainbow_color");

clearButton.addEventListener("click", function () {
  clearGrid();
  generateGrid();
});

eraseButton.addEventListener("click", function () {
  colorMode = "erase";
});

rainbowButton.addEventListener("click", function () {
  colorMode = "rainbow";
});

customColorPicker.addEventListener("click", function () {
  colorMode = "color";
});

gridSizeSelector.addEventListener("input", function (event) {
  gridSize = parseInt(event.target.value);

  clearGrid();
  generateGrid();
});

function generateGrid() {
  drawContainer.style["grid-template-columns"] = `repeat(${gridSize},1fr)`;
  drawContainer.style["grid-template-rows"] = `repeat(${gridSize},1fr)`;

  for (let i = 0; i < gridSize ** 2; i++) {
    let gridCell = document.createElement("div");
    gridCell.addEventListener("mouseover", hoverColor);
    gridCell.addEventListener("mousedown", hoverColor);
    drawContainer.appendChild(gridCell);
  }

  gridSizeIndicator.innerText = `${gridSize}x${gridSize}`;
}

function clearGrid() {
  drawContainer.innerHTML = "";
}

function hoverColor(e) {
  if (colorMode === "color") {
    e.target.style.backgroundColor = customColorPicker.value;
  } else if (colorMode === "rainbow") {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
  } else if (colorMode === "erase") {
    e.target.style.backgroundColor = "white";
  }
}

window.onload = () => {
  generateGrid();
};
