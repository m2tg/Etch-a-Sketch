let etchContainer = document.querySelector('.container');

for (let i = 1;i <= (16*16); i++) {
    let div = document.createElement('div');
    div.classList.add(`etch${i}`);
    div.style.cssText = 'width: 6.25%; height: 6.25%;'
    etchContainer.appendChild(div);
}

function etchDiv(element) {
    //console.log(this);
    this.classList.add('etched');
}

const etchableDivs = etchContainer.querySelectorAll('[class*="etch"]');

etchableDivs.forEach( (div) => {
    div.addEventListener('mouseover', etchDiv);
})

