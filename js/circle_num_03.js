$(document).ready(function() {

var nodNumx = 20;//갯수
//개당각도
var clcrx = (360/nodNumx); 
  
//중심 좌표 (Cx, Cy) : 111
var Cxx = Math.floor(252 / 2);
var Cyx = Math.floor(252 / 2);

//r원의반지름 : 타원 / 일반원 r = 150 / radius = Math.floor(canvas.width / 2);
var rax = 126; var rbx = 126; 

var xi_one = 14-1; //문제발생 노드번호
var xi_two = 18-1; //문제발생 노드번호

function xarea(xi, xcolor){

	var degrees = 270; //TOP에서 부터 시작
	var clxx = Cxx + (rax * Math.cos(((clcrx*xi+degrees) * Math.PI)/180));
    var clyx = Cyx + (rbx * Math.sin(((clcrx*xi+degrees) * Math.PI)/180));
	
	if(xcolor === "red"){
var tag = '<img class="xpoint" src="images/xicon.png" width="26" height="26" />';
$( '.xarea').append(tag);	
$( '.xpoint' ).css({
			"position" : "absolute",
			"left" : clxx-13,
			"top" : clyx-13
		  });
	}else if(xcolor === "gray"){
		
		var tagn = '<img class="xpointn" src="images/xicon_gray.png" width="26" height="26" />';
$( '.xarea').append(tagn);	
$( '.xpointn' ).css({
			"position" : "absolute",
			"left" : clxx-13,
			"top" : clyx-13
	});
	}
	
}

xarea(xi_one, "red");
xarea(xi_two, "gray");

} );