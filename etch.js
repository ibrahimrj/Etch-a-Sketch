let board = document.querySelector('#grid');
let color = document.querySelector('#picker')
let eraser = document.querySelector('#eraser')
let random = document.querySelector('#random')
let sizes = document.querySelector('#size')
let sizeText = document.querySelector('#sizeText')

let pColor = "white";
let size = sizes.value;
let click = false;

function populateGrid(size) {
    let squares = document.querySelectorAll('#grid div')
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    maxAmount = size * size;

    for (let i = 0; i < maxAmount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square)
    }


}

populateGrid(16)

function changeSize(input) {
    populateGrid(input);
    sizeText.textContent = input;
}

function colorSquare() {
    if (click) {
        if (pColor === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
        } else {
            this.style.backgroundColor = pColor;
        }
    }
}

function changeColor(input) {
    pColor = input;
}

function resetGrid() {
    let squares = document.querySelectorAll('#grid div')
    squares.forEach((div) => div.style.backgroundColor = "white");
}

board.addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        if (click) {
            document.querySelector(".mode").textContent = "Mode : Pen On"
        } else {
            document.querySelector(".mode").textContent = "Mode : Pen Off"
        }
    }
})
