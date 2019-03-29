var hang = new p5.SpeechRec('hu'); // speech recognition object (will prompt for mic access)
var continuous=true;//folyamatosan rögzít
var interim=true;
hang.continuous=true;
hang.interimResults=false;
hang.start(); // start listening
hang.onResult = showResult; // bind callback function to trigger when speech is recognized

function showResult()
{
  //console.log(hang.resultString); // log the result
  if(hang.resultValue){
	//document.getElementById("h1").innerHTML = hang.resultString;
	if(hang.resultString=="Kurucz Gábor"){
		location.href = 'https://avatars0.githubusercontent.com/u/42976086?s=400&v=4';
	}
	else{
	document.write("<h1>"+hang.resultString+"<br>");
	}
  }
}