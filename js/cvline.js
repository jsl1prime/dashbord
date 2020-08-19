$(document).ready(function() {
function draw() {

	//컬러선 샘플
	lincolr = ['#4cb6aa','#80ca3e','#4cb6aa','#6c6ad4','#4cb6aa','#4cb6aa','#4cb6aa','#4cb6aa','#6c6ad4','#4cb6aa','#4cb6aa','#4cb6aa','#4cb6aa','#f9465c','#4cb6aa','#4cb6aa','#4cb6aa','#9e9e9e','#4cb6aa','#4cb6aa']
	var nodNum = 7;//갯수

  //개당각도
  var clcr = (360/nodNum);

  var canvas = document.getElementById('circle');
  canvas.width = 488;
  canvas.height = 488;

  //중심 좌표 (Cx, Cy) : 221
  var Cx = Math.floor(canvas.width / 2);
  var Cy = Math.floor(canvas.height / 2);

  //r원의반지름 : 타원 / 일반원 r = 150 / radius = Math.floor(canvas.width / 2);
  var ra = 244; var rb = 244;
  var rax = 126; var rbx = 126;

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
	ctx.lineWidth = 1;

    for(i=0; i<nodNum; i++){

	var degrees = 270; //TOP에서 부터 시작
	//var radians = degrees * (Math.PI / 180);

	if(i==13||i==17){
	ctx.strokeStyle = lincolr[i];
    ctx.beginPath();
    ctx.moveTo(244, 244);

	//중간점까지가기
	var clxn = Cx + (rax * Math.cos(((clcr*i+degrees) * Math.PI)/180));
    var clyn = Cy + (rbx * Math.sin(((clcr*i+degrees) * Math.PI)/180));

    ctx.lineTo(clxn, clyn);
	ctx.setLineDash([]);
    ctx.stroke();
	    ctx.beginPath();
	 ctx.moveTo(clxn, clyn);

	//도착점까지가기

    var clx = Cx + (ra * Math.cos(((clcr*i+degrees) * Math.PI)/180));
    var cly = Cy + (rb * Math.sin(((clcr*i+degrees) * Math.PI)/180));

    ctx.lineTo(clx, cly);
	ctx.setLineDash([4, 7]);/*dashes are 5px and spaces are 3px*/
    ctx.stroke();

	}else{
	ctx.setLineDash([]);
	ctx.strokeStyle = lincolr[i];
    ctx.beginPath();
    ctx.moveTo(244, 244);
    var clx = Cx + (ra * Math.cos(((clcr*i+degrees) * Math.PI)/180));
    var cly = Cy + (rb * Math.sin(((clcr*i+degrees) * Math.PI)/180));

    ctx.lineTo(clx, cly);
    ctx.stroke();
	}

    }
  }
}
draw();
} );
