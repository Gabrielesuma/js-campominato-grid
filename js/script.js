let elButton = document.getElementById(button);

elButton.addEventListener('click', function(){

})

const elGrid = document.querySelector('section#grid');

for(let i = 0; i < 100; i++){
    elGrid.appendChild(generateSquare());
}

function generateSquare(){
    const newElement = document.createElement('div');
    newElement.classList.add('square');
    return newElement;
}

//<div class="square"></div>