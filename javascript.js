let gridSize = 16;

let etchContainer = document.querySelector('.container');

function generateGrid() {

    document.querySelectorAll('[class*="etch"]').forEach( (element) =>{
        element.remove();
    });

    for (let i = 1;i <= (gridSize ** 2); i++) {
        let div = document.createElement('div');
        div.classList.add(`etch${i}`);
        div.style.cssText = `width: ${100/gridSize}%; height: ${100/gridSize}%;`
        etchContainer.appendChild(div);
}
etchDiv();
}

function etchDiv() {
    //console.log(this);
    const etchableDivs = etchContainer.querySelectorAll('[class*="etch"]');

    etchableDivs.forEach( (div) => {
        div.addEventListener('mouseover', function (e) {
            this.classList.add('etched');
        });
    })
    
}

generateGrid();


const button = document.querySelector('#gridSize');

button.addEventListener('click', (e) => {
    gridSize = prompt("Enter grid size");
    generateGrid();
})


