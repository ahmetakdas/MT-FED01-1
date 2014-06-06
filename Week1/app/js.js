$(function(){
	init();
});

function init(){
	$("form").on("submit", formHandler);	
}

function formHandler(){
	var input = $("#todo");
	var list = $("#list");
	if(input.val().length < 1){
		alert("Voer een waarde in.");
		return false;
	}
	var li = $("<li />").html(input.val()).appendTo(list);
	input.value = "";
	return false;	
}