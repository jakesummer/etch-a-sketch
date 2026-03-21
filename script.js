let gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "black";

        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor === "black" ?
            e.target.style.backgroundColor = getRandomColor():
            "";
        })

        gridContainer.appendChild(square);
    }
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 100
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}