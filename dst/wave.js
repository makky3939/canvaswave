var cvs, ctx;
var frame = 0;

var frameSin = function(n){return Math.sin(frame/n)*cvs.width/10;}
var frameCos = function(n){return Math.cos(frame/n)*cvs.width/10;}

window.onload = function() {
	cvs = document.createElement("canvas");
	ctx = cvs.getContext("2d");
	document.body.appendChild(cvs);

	(window.onresize = function() {
		cvs.width = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
		cvs.height = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
	})();

	(function render() {
		var w = cvs.width, h = cvs.height;
		ctx.clearRect(0, 0, w, h);
		ctx.strokeStyle = "rgb(31, 152, 166)";
		ctx.beginPath();

		ctx.moveTo(0, h-100+frameSin(160));
		ctx.bezierCurveTo(w/3+frameSin(160), h/2+frameCos(120), w*2/3+frameCos(140), h/2+frameSin(190), w, 100-frameCos(130));
		
		ctx.moveTo(0, h-100+frameSin(160));
		ctx.bezierCurveTo(w/3+frameSin(160), h/2+frameCos(120), w*2/3+frameCos(140), h/2+frameSin(190), w, 100-frameCos(130));
		
		ctx.moveTo(0, h-300+frameCos(140));
		ctx.bezierCurveTo(w/3+frameSin(130), h*2/5+frameCos(170), w*2/3+frameCos(180), h*3/5+frameSin(150), w, 300-frameSin(140));
		
		ctx.moveTo(0, h-300+frameCos(100));
		ctx.bezierCurveTo(w/3+frameSin(130), h*2/5+frameCos(70), w*2/3+frameCos(180), h*3/5+frameSin(50), w, 300-frameSin(140));

		/*ctx.fillStyle = 'Red';
		ctx.globalAlpha = 0.5;
		ctx.fill();*/
		ctx.stroke();
		window.requestAnimationFrame(render);
		frame++;
	})();
}