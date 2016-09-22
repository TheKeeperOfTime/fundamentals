//This is how you setup Jquery
$(document).ready(function(){
	//alert("Hello JQuery!");

	$("#hide").click(function(){
		$("#image").hide();
	});


	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 16}, 5000);
	});
	
	$("#shake").click(function(){
  		$("#image").effect("shake").toggle("bounce",{ times: 22},"slow");
	});




});