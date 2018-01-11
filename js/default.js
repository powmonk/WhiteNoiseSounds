var jazzAudio  = document.getElementById("jazz");
var rainAudio  = document.getElementById("rain");
var noiseAudio = document.getElementById("noise");
var trainAudio = document.getElementById("train");

function play(audioType){
	
	switch(audioType) {
		case 'jazz':
			audio.play = audio.paused?audio.play:!audio.play;
			break;
		case 'rain':
			var audio = document.getElementById("rain");
			break;
		case 'noise':
			var audio = document.getElementById("noise");
			break;
		case 'train':
			var audio = document.getElementById("train");
			audio.volume = 0.05;
			break;
	}
	
	//if(audio.paused){
	//	audio.play();
	//}else{
	//	audio.pause();
	//}
}
