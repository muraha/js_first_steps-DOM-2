let p = document.querySelector('.child');
let textLength = p.clientWidth;
p.style.left = '100%';
let startPos = parseInt(getComputedStyle(p).left, 0);
marqee(p, 8000, 20);

function marqee(p, t, f) {
    let fps = f || 50;
    let time = t || 5000;
    let steps = Math.round(time / fps);
    let position = startPos;
    let dPos = (position + textLength) / steps; //delta

    let timer = setInterval(function () {
        position -= dPos;
        p.style.left = position + 'px';
        steps--;
        if (steps == 0) {
            steps = Math.round(time / fps);
            p.style.left = '100%'
            position = parseInt(getComputedStyle(p).left, 10);
            dPos = (position + textLength) / steps;
            p.style.left = position + 'px';
        }
    }, 20);
}



let btn = document.querySelector('button');
let inp1 = document.querySelector('input:first-of-type');
let inp2 = document.querySelector('input:last-of-type');

btn.addEventListener('click', function () {
    inp2.value = null;

    let timer = setInterval(print, 70) //setTimeout
    let i = 0;
    let outout = '';

    function print() {
        outout += inp1.value[i]
        inp2.value = outout + '_';
        i++;
        if (i === inp1.value.length) {
            clearInterval(timer)
        }
    }
})
