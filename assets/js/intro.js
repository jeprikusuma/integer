const getText = document.querySelector('.intro-text h1#getAnimate'),
    nav = document.querySelector('header.navbar');


const show = text => {
    getText.innerHTML = text;
    getText.style.animationName = "intro-show";
}

const reset = () => {
    getText.style.animationName = "intro-remove";
}

const animate = (text, next) => {
    show(text);
    if (next) {
        setTimeout(() => {
            reset();
        }, 3000)
    }
}



animate(getText.dataset.first, true);
setTimeout(() => {
    animate(getText.dataset.sec, true)
    setTimeout(() => {
        animate(getText.dataset.end, false)
        setTimeout(() => {
            nav.classList.remove('d-none')
        }, 1500)
    }, 5000)
}, 5000)

window.onscroll = () => {
    nav.classList.remove('d-none')
};