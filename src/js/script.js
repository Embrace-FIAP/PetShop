let imagens = ['../src/assets/cachorro1Ed.png', '../src/assets/gato1Ed.png'];
let index = 0;
let time = 5000;

function slideShow() {
    document.getElementById('imgSlide').src=imagens[index];
    index++;

    if (index == imagens.length) {
        index = 0;
    }

    setTimeout('slideShow()', time);
}

slideShow();