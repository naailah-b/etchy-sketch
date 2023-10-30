const container = document.querySelector('#container');
let rows = document.getElementsByClassName("row");
let counter = 0;
let loopy = 0;


function createGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rInput) {
    for (i = 0; i < rInput; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = "row";
    }
}

function makeColumns(cInput) {
    for (j = 0; j < rows.length; j++) {
        for (x = 0; x < cInput; x++) {
            let column = document.createElement('div');

            rows[x].appendChild(column).id = counter;
            document.getElementById(counter).className = 'column';
            counter++;
        }
    }
}


function colorTrail(row, column) {
    for (p = 0; p < row * column; p++) {
        document.getElementById(p).addEventListener('mouseover', colors);
    }
}

function colors(event) {
    this.style.backgroundColor = 'pink';
}

createGrid();
colorTrail(16, 16);