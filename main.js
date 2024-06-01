const clearBtn = document.getElementById("clear-btn");
const eraserBtn = document.getElementById("eraser-btn");
const rainbowBtn = document.getElementById("rainbow-btn");
const singleBtn = document.getElementById("single-btn");
const submitBtn = document.getElementById("submit-btn");
const sliderBtn = document.getElementById("slider");
const container = document.getElementById("container");
const rangeValue = document.getElementById("rangeValue");
const colorPicker = document.getElementById("color-picker")
let isSingle = true;
let isWhite = false;

function draw (event) {
    if (isSingle) {
        event.target.style.backgroundColor = colorPicker.value;
    } 
    else if (isWhite) {
        event.target.style.backgroundColor = "white";
    }
    else {
        event.target.style.backgroundColor =  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    }
}

function randomNumber () {
    let number = Math.floor(Math.random() * 256);
    return number;
}

function setSizeOfCanvas (tileCount) {
    container.innerHTML = ' ';
    tileCount = sliderBtn.value;
    for (let i = 0; i < tileCount; i++) {
        let rows = document.createElement("div");
        rows.classList.add("row");
        container.appendChild(rows);
    
        for ( let j = 0; j < tileCount; j++) {
            let columns = document.createElement('div');
            columns.classList.add("column");
            rows.appendChild(columns);
            columns.addEventListener('mouseover', draw);

        }
    }
}

clearBtn.addEventListener("click", setSizeOfCanvas);
eraserBtn.addEventListener("click", () => {isWhite = true; isSingle = false;});
singleBtn.addEventListener("click", () => {isWhite = false; isSingle = true;});
rainbowBtn.addEventListener("click", () => {isWhite = false; isSingle = false;});
submitBtn.addEventListener("click", setSizeOfCanvas);

