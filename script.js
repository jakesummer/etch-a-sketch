let gridContainer = document.querySelector("#grid-container");
let changeGridSizeButton = document.querySelector("#change-size");

changeGridSizeButton.addEventListener("click", changeGridSize)

function createGrid(squaresPerSide){
    for (let i = 0; i < squaresPerSide; i++) {
        for (let j = 0; j < squaresPerSide; j++) {
            let square = document.createElement("div");

            let squareSize = `calc(100% / ${squaresPerSide})`;
            square.style.cssText = `width: ${squareSize}; height: ${squareSize}; `;

            square.style.backgroundColor = "black";

            square.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor === "black" ?
                e.target.style.backgroundColor = getRandomColor():
                "";
            })

            gridContainer.appendChild(square);
        }
    }
}

function changeGridSize(){
    let newGridSize;

    while (!(newGridSize >= 1 && newGridSize <= 100)) {
        newGridSize = prompt("Enter squares per side (1-100):");

        if (!newGridSize) return;
    }
    removeGrid();
    createGrid(newGridSize);
    alert(`Squares per side changed to ${newGridSize}`);
}

function removeGrid() {
    gridContainer.replaceChildren();
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 100
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

createGrid(16);