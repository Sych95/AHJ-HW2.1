export function createField(boardSize) {
    const body = document.querySelector('body');

    const field = document.createElement('div');
    field.classList.add('field');
    body.insertAdjacentElement('afterbegin', field)

    for(let i = 0; i<boardSize*boardSize; i++){
        let hole = document.createElement('div');
        hole.classList.add('hole');
        field.insertAdjacentElement('beforeend', hole);
    }
}