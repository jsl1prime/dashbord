$(document).ready(function() {

var nodNum = 7;//갯수
//개당각도
var clcr = (360/nodNum);

//중심 좌표 (Cx, Cy) : 244
var Cx = Math.floor(488 / 2);
var Cy = Math.floor(488 / 2);

//r원의반지름 : 타원 / 일반원 r = 150 / radius = Math.floor(canvas.width / 2);
var ra = 244; var rb = 244;

//기본 노드 20개 보다 커질때 원사이즈 조정
var MaxnoN = 20; //노드기본사이즈 숫자
var cles_ojSize = 74; //선택최대크기
var clc_wrapSize = 46; //안에원최대크기
var clc_ntxt = 20; //폰트사이즈최대크기

var PrsntojSize = cles_ojSize*((MaxnoN * 100) / nodNum)/100;
var PrsntClcwrap = clc_wrapSize*((MaxnoN * 100) / nodNum)/100;
var PrsntClcntxt = clc_ntxt*((MaxnoN * 100) / nodNum)/100;

 for(i=0; i<nodNum; i++){
	var degrees = 270; //TOP에서 부터 시작
	var clx = Cx + (ra * Math.cos(((clcr*i+degrees) * Math.PI)/180));
    var cly = Cy + (rb * Math.sin(((clcr*i+degrees) * Math.PI)/180));

	var tag = '<div class="cles_oj ary_'+(i+1)+'">';
		 tag +='<div class="clc_prs"></div>';
		 tag +='<div class="clc_wrap">';
		 tag +='<span class="clc_ntxt">'+(i+1)+'</span>';
		 tag +='</div>';
		 tag +='</div>';

		 $( '#cle_num_box' ).append(tag);

		 //노드가 20개보다 많을때 사이즈 수정
		 if(nodNum>MaxnoN){

			 $( '.ary_'+(i+1)+'' ).css({
					"width" : PrsntojSize,
					"height" : PrsntojSize
			 });

			 $( '.ary_'+(i+1)+'' ).children( '.clc_prs' ).css({
					"width" : PrsntojSize,
					"height" : PrsntojSize
			 });

			 $( '.ary_'+(i+1)+'' ).children( '.clc_wrap' ).css({
					"width" : PrsntClcwrap,
					"height" : PrsntClcwrap,
					"margin-left" : -(PrsntClcwrap/2)+'px',
					"margin-top" : -(PrsntClcwrap/2)+'px'
			 });

			 $( '.ary_'+(i+1)+'' ).children( '.clc_wrap' ).children( '.clc_ntxt' ).css({
					"width" : PrsntClcwrap,
					"height" : PrsntClcwrap,
					"font-size" : PrsntClcntxt+'px',
					"lin-height" : PrsntClcwrap+'px',
					"margin-left" : -(PrsntClcwrap/2)+'px'
			 });

			 $( '.ary_'+(i+1)+'' ).css({
			 "left" : clx-(PrsntojSize/2),
			"top" : cly-(PrsntojSize/2)
		  });
		  $( '.clc_prs' ).hide();

		 }else{


		 var ary_wsize = $( '.cles_oj' ).width();
		 var ary_hsize = $( '.cles_oj' ).height();

		 $( '.ary_'+(i+1)+'' ).css({
			 //"left" : clx-37,
			 "left" : clx-(ary_wsize/2),
			 //"top" : cly-37
			"top" : cly-(ary_wsize/2)
		  });
		  $( '.clc_prs' ).hide();

		 }

 }

$( '.ary_14' ).children( '.clc_prs' ).show();

$( '.ary_14' ).children( '.clc_wrap' ).css({
	"background-color" : "#f9465c"
	  });

 $( '.ary_14' ).children( '.clc_prs' ).css({
	"border" : "2px solid #f9465c"
	  });

$( '.ary_2' ).children( '.clc_wrap' ).css({
	"background-color" : "#80ca3e"
	  });

$( '.ary_4' ).children( '.clc_wrap' ).css({
	"background-color" : "#6c6ad4"
	  });

$( '.ary_9' ).children( '.clc_wrap' ).css({
	"background-color" : "#6c6ad4"
	  });

$( '.ary_18' ).children( '.clc_wrap' ).css({
	"background-color" : "#9e9e9e"
	  });

} );
