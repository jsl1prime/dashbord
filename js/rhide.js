$(document).ready(function() {
	$(".hidsh_btn").bind('click, dblclick',function(){ 
			 var hideshow = $(this);
			 if(hideshow.hasClass("open")){
				 			 	$('.left_pst').css({
										 "visibility" : "visible"
				 				});	
				 			 	$('.left_info').css({
										 "visibility" : "visible"
				 				});
								$('.hidsh_btn').css({
										 "background-image" : "url(images/righthide_btn.png)"
				 				});
								$('.status').css({
										 "width" : "calc(100% - 396px)"
				 				});
								
                         hideshow.removeClass("open");	
				}else{	
				$('.left_pst').css({
						"visibility" : "hidden"
				 });		
				$('.left_info').css({
						"visibility" : "hidden"
				 });	
				 $('.hidsh_btn').css({
						"background-image" : "url(images/rightshow_btn.png)"
				 });
				$('.status').css({
						"width" : "100%"
				 });
				hideshow.addClass("open");
				}
        });

} );
