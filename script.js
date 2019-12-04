// const body = document.querySelector('body');
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
ctx.scale(2, 2);

let x = 0;
let y = 0;

[canvas.width, canvas.height] = [window.innerWidth, window.innerHeight];
[ctx.lineJoin, ctx.lineCap] = ['round', 'round'];

console.log(ctx.strokeStyle);
ctx.lineWidth = 1;

function draw(n) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < n; i++) {
		ctx.strokeStyle = 
			// 'darkgrey';
			'hsla(' + Math.floor(Math.random() * 360) + ', 77%, 77%, 1)';
		ctx.beginPath();
		ctx.moveTo(x, y);

		x2 = Math.random() * canvas.width;
		y2 = Math.random() * canvas.height;
		xDiff = Math.abs(x - x2);
		yDiff = Math.abs(y - y2);
		// xDiff = x - x2;
		// yDiff = y - y2;

		// ctx.lineTo(x2, y2);
		// ctx.quadraticCurveTo(xDiff, yDiff, x2, y2);
		ctx.bezierCurveTo(x, yDiff, xDiff, yDiff, x2, y2);
		ctx.stroke();

		x = x2;
		y = y2;
	}

	const bg = 'hsla(' + Math.floor(Math.random() * 360) + ', 30%, 60%, .8)'
	const bg2 = 'hsla(' + Math.floor(Math.random() * 360) + ', 30%, 60%, .6)'
	document.body.style.background = 'linear-gradient(' + bg + ',' + bg2 + ')';
	console.log(document.body.style.background);
}

draw(20);

canvas.addEventListener('click', function(e) {
	draw((e.clientY / canvas.height) * 50);
});
