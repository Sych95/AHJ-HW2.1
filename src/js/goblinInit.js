import goblin from '../img/goblin.png'

export function goblinInit () {
    let holeList = Array.from(document.querySelectorAll('.hole'));
    if(document.querySelector('.goblin')){
        let goblin = document.querySelector('.goblin');
        goblin.remove();
    }
    let goblinContaner = document.createElement('img');
    goblinContaner.classList.add('goblin');
    goblinContaner.src = goblin;
    let startPosition = Math.floor(Math.random()*holeList.length)
    holeList[startPosition].insertAdjacentElement('afterbegin', goblinContaner)
}