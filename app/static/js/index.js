//  TEMPLATE CODE FROM PREVIOUS PROJECT
// TODO:  Remove and Adjust
$(document).ready(function(){

// Event handlers:
$("#chartquery1").find("btnSubmit").click(chartQueryOne);

}); // doc-ready

function post(){
	var upper = document.getElementById("upper").value;
	var lower = document.getElementById("lower").value;
	var queryForm = document.getElementById("queryForm");
	
	console.log("Upper: "+upper+"  Lower: "+lower);
	
	if(upper == "" || lower == "" || isNaN(upper) || isNaN(lower)){
		alert("Please enter valid input: number or decimal.");
	}else if(parseFloat(upper) < parseFloat(lower) ){
		alert("Please enter valid input: lower MUST be less than upper.");
	}else{
		queryForm.setAttribute("method", "POST");
		queryForm.setAttribute("action", "/question3/");
		queryForm.setAttribute("onsubmit", "");
		
		queryForm.submit();
	}	
}

function AJAXpost(){
	if(upper == "" || lower == "" || isNaN(upper) || isNaN(lower)){
		alert("Please enter valid input: number or decimal.");
	}else if(parseFloat(upper) < parseFloat(lower) ){
		alert("Please enter valid input: lower MUST be less than upper.");
	}else{
		data = JSON.stringify({'upper': parseFloat(upper), 'lower': parseFloat(lower)});
		$.post("/question4/", data, function(result){ console.log(result); } );
	}
}



function renderResults(results){
	

}


function chartQueryOne(){
	var upper = document.getElementById("upper").value;
	var lower = document.getElementById("lower").value;
	
	if(upper == "" || lower == "" || isNaN(upper) || isNaN(lower)){
		alert("Please enter valid input: number or decimal.");
	}else if(parseFloat(upper) < parseFloat(lower) ){
		alert("Please enter valid input: lower MUST be less than upper.");
	}else{
		data = JSON.stringify({'upper': parseFloat(upper), 'lower': parseFloat(lower)});
		$.post("/question4/", data, function(result){ 
			//var newData = []
			//for(int i=0; i < results.length; i++){
			//	newData[i] = 
			//}	
			console.log(result);
			graphDoughnut("myChart", result);
		});
	}
}


function graphPolarArea(ChartName,data){
	// Get the context of the canvas element we want to select
	var ctx = document.getElementById(name).getContext("2d");
	var myNewChart = new Chart(ctx).PolarArea(data);
}

function graphDoughnut(ChartName,data){
	// Get the context of the canvas element we want to select
	var ctx = document.getElementById(ChartName).getContext("2d");
	var myNewChart = new Chart(ctx).Doughtnut(data);
}