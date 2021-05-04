const gridContainer = document.querySelector("#grid-contain");
const sizeButton = document.querySelector("#size-button");
const colorButtton = document.querySelector("#color-button");

window.addEventListener("load", setDefaultGrid);

sizeButton.addEventListener("click", changeDefaultGrid);

colorButtton.addEventListener("click", changePenColor);


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

  function changeColor(e) {
    e.target.style.backgroundColor = "Blue";
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
    if(newColor="Red"){
      changeColor(newColor);
    }else if(newColor="Green"){
      changeColor(newColor);
    }else if(newColor="Blue"){
      changeColor(newColor);
    }else if(newColor="Yellow"){
      changeColor(newColor);
    }else if(newColor="Purple"){
      changeColor(newColor);
    }else if(newColor="Orange"){
      changeColor(newColor);
    }else{
      alert("You must choose a compatable color")
      changePenColor();
    }
  }