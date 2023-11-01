const container = document.querySelector('#container');
let rows = document.getElementsByClassName("row");
let counter = 0;
let loopy = 0; 
let num1, num2;

document.getElementById('btnPrompt').addEventListener('click', () => {
    num1 = Number(prompt('Enter the number of rows '));
    num2 = Number(prompt('Enter the number of columns '));
    delGrid();
    createGrid();
})

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
    colorTrail(16, 16);
    heart();
}

function createGrid() {
    makeRows(num1);
    makeColumns(num2);
    colorTrail(num1, num2);
}

function delGrid() {
    document.getElementById('container').innerHTML = ''
}

function makeRows(rInput) {
    console.log(rInput)
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
    this.style.backgroundColor = 'black';
}

function heart() {
    let ids = ['35', '36', '37', '42', '43', '44', '50', '51', '52', '53', '54', '57', 
'58', '59', '60', '61', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74',
'75', '76', '77', '78', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90',
'91', '92', '93', '94', '97', '98', '99', '100', '101', '102', '103', '104', '105',
'106', '107', '108', '109', '110', '114', '115', '116', '117', '118', '119', '120',
'121', '122', '123', '124', '125', '131', '132', '133', '134', '135', '136', '137',
'138', '139', '140', '148', '149', '150', '151', '152', '153', '154', '155', '165',
'166', '167', '168', '169', '170', '182', '183', '184', '185', '199', '200']

    ids.forEach(element => {
        document.getElementById(element).style.backgroundColor = 'pink'
    })
}

defaultGrid();



