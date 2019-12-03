const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
ctx.scale(2, 2);

let x = 0;
let y = 0;

[canvas.width, canvas.height] = [window.innerWidth, window.innerHeight];
[ctx.lineJoin, ctx.lineCap] = ['round', 'round'];

console.log(ctx.strokeStyle);
ctx.lineWidth = 0.5;

function draw(n) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < n; i++) {
    ctx.strokeStyle =
      'hsla(' + Math.floor(Math.random() * 360) + ', 77%, 77%, .3)';
    ctx.beginPath();
    ctx.moveTo(x, y);

    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;

    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

// draw(50);

canvas.addEventListener('click', function(e) {
  draw((e.clientY / canvas.height) * 500);
  console.log(e);
  console.log((e.clientY / canvas.height) * 500);
});
