$(document).ready(function() {

var nodNums = 20;//갯수
//개당각도
var clcrs = (360/nodNums); 
  
//중심 좌표 (Cx, Cy) : 221
var Cxs = Math.floor(780 / 2);
var Cys = Math.floor(558 / 2);

//r원의반지름 : 타원 / 일반원 r = 150 / radius = Math.floor(canvas.width / 2);
var ras = 332; var rbs = 283; 

 for(i=0; i<nodNums; i++){
	var degrees = 270; //TOP에서 부터 시작
	var clxs = Cxs + (ras * Math.cos(((clcrs*i+degrees) * Math.PI)/180));
    var clys = Cys + (rbs * Math.sin(((clcrs*i+degrees) * Math.PI)/180)); 
	
	var tag = '<div class="nde_line sry_'+(i+1)+'">';
		 tag +='<span class="nde_ttx">node #a1</span>';
		 tag +='<span class="nde_ttx">&nbsp;/&nbsp;</span>';
		 tag +='<span class="nde_ttx">상암공장</span>';
		 tag +='</div>';
		 
		 $( '.nde_namwp' ).append(tag);	 
		 
		 var sry_size = $( '.sry_'+(i+1)+'' ).outerWidth();
		 $( '.sry_'+(i+1)+'' ).css({
			"left" : clxs-(sry_size/2),
			"top" : clys-7
		  });
 }
	
	$( '.sry_14' ).children( '.nde_ttx' ).css({
		"color" : "#FFFFFF"	
	});
	
} );