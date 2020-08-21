$(document).ready(function() {
	
	var winSize_width;        //전체 윈도우사이즈
	var node_valueWidth;   //노드상태창width사이즈
	var allMargin = 76;        //전체 마진값
	
	winSize_width = $(window).width();
	make_Thresize(winSize_width);	
	
	$( window ).resize( function() {
		// do somthing
  		winSize_width = $(window).width();
		make_Thresize(winSize_width);	
} );
	
	function make_Thresize(winSize){
		node_valueWidth=(winSize-allMargin)/3;
		$( '.btm_box' ).width(node_valueWidth);
	}
	
} );
