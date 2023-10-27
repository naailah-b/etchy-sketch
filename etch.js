const container = document.querySelector('#container'); 
let rows = document.getElementsByClassName("row");
let counter = 0;


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
            column.textContent = "m";
            counter++;
            //rows[x].appendChild(column).className = "column";
            rows[x].appendChild(column).id = counter;
        }
    }
    console.log(document.getElementById(c))
}

function colorTrail(row, column) {
    for (c = 0; c < 256; c++) {
        let colorless = document.getElementById(c); 
        colorless.style.backgroundColor = 'pink';
        
    }
}
    

createGrid();
colorTrail(16, 16);