let elButton = document.getElementById('button');
let elSection = document.getElementById('grid');

elButton.addEventListener('click', function(){
    elSection.classList.toggle('d-none');
})

const elGrid = document.querySelector('section#grid');

for(let i = 0; i < 100; i++){
    const newSquare = generateSquare(i + 1);

    newSquare.addEventListener('click', function(){
        newSquare.classList.toggle('clicked');
        console.log(i +1);
    })

    elGrid.appendChild(newSquare);
}

function generateSquare(index){
    const newElement = document.createElement('div');
    newElement.innerHTML = `<span>${index}</span>`;
    newElement.classList.add('square');
    return newElement;
}

//<div class="square"></div>