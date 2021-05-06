const gridContainer = document.querySelector("#grid-contain");
const sizeButton = document.querySelector("#size-button");
const colorButtton = document.querySelector("#color-button");
const eraserButton = document.querySelector("#eraser-button");

window.addEventListener("load", setDefaultGrid);

sizeButton.addEventListener("click", changeDefaultGrid);

colorButtton.addEventListener("click", changePenColor);

eraserButton.addEventListener("click", changePenType);


function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}


function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }


function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList = "grid-element";
      gridElement.addEventListener("mouseover", changeColor);
      gridContainer.appendChild(gridElement);
    }
  }
  let penColor = "Blue"
  function changeColor(e) {

    e.target.style.backgroundColor = penColor;
  }

  function changeDefaultGrid() {
    let newGrid= prompt("Enter new grid size")
    if(newGrid<1 || newGrid>100){
        alert("The size must be between 1 and 100");
        changeDefaultGrid();
    }else{
        setGridSize(newGrid);
        fillGrid(newGrid);
    }
  }

  function changePenColor() {
    let newColor= prompt("Enter a color of your choice")
    if(newColor=="Red"){
      penColor = "Red";
    }else if(newColor=="Green"){
      penColor = "Green";
    }else if(newColor=="Blue"){
      penColor = "Blue";
    }else if(newColor=="Yellow"){
      penColor = "Yellow";
    }else if(newColor=="Purple"){
      penColor = "Purple";
    }else if(newColor=="Orange"){
      penColor = "Orange";
    }else{
      alert("You must choose a compatable color")
     changePenColor();
    } 
  }

  function changePenType() {
    penColor = "White";
  }