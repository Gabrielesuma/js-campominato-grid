document.querySelector('button#play-button').addEventListener('click', function(){
    const cellNum = parseInt(document.querySelector('play-select').value);
    newGame(cellNum);
});

function newGame(numberOfSquares){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    for(i = 0; i < numberOfSquares; i++){
        const newSquare = document.createElement('article');
        newSquare.classList.add('square');

        if(numberOfSquares === 81){
            newSquare.classList.add('nine');
        } else if(numberOfSquares === 49){
            newSquare.classList.add('seven');
        }

        newSquare.addEventListener('click', function(){
            newSquare.classList.toggle('clicked');
        });
    
        const spanContent = document.createElement('span');
        spanContent.append(index);
    
        newSquare.appendChild(spanContent);
        grid.appendChild(newSquare);
    }
};