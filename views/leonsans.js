let leon, canvas, ctx;

const sw = 700;
const sh = 100;
const pixelRatio = 2;

function init() {
    canvas = document.createElement('canvas');
    canvas.classList.add('canvas');
    document.querySelector('.title').appendChild(canvas);
    ctx = canvas.getContext('2d');

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + 'px';
    canvas.style.height = sh + 'px';
    ctx.scale(pixelRatio, pixelRatio);

    leon = new LeonSans({
        text: 'Alexandria Library',
        color: ['#000000'],
        size: 85,
        weight: 400,
    });

    let i,
        total = leon.drawing.length;
    for (i = 0; i < total; i++) {
        TweenMax.fromTo(
            leon.drawing[i],
            1.6,
            {
                value: 0,
            },
            {
                delay: i * 0.05,
                value: 1,
                ease: Power4.easeOut,
            }
        );
    }

    requestAnimationFrame(animate);
}

function animate(t) {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    const x = (sw - leon.rect.w) / 2;
    const y = (sh - leon.rect.h) / 2;
    leon.position(x, y);

    leon.draw(ctx);
}

window.onload = () => {
    init();
};
