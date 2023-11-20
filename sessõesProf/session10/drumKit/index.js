const buttons = document.querySelectorAll('.drum');

const playSound = (key) => {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            break;
    }
    audio.play();
}

document.addEventListener('keydown', e => playSound(e.key));

buttons.forEach(button => {
    button.addEventListener('click', e => playSound(e.target.innerText))
});
