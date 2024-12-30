let btn = document.querySelector('.button');
let radio = document.querySelector('[type=radio]');
radios[Math.floor(Math.floor()*radios.length)].checked = true;

radios.forEach((r) => {
    r.onclick = () => {
        btn.dataset.effect = e.currentTarget.value;
        btn.classList.remove('textShine');
        window.requestAnimationFrame(() => {
            btn.classList.add('textShine');
        })
    }
    if (r.checked) {
        btn.dataset.effect = r.value;
    }
})