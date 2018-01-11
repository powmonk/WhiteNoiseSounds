function play(audioType){
	
	switch(audioType) {
		case 'jazz':
			var audio = document.getElementById("jazz");
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
	
	if(audio.paused){
		audio.play();
	}else{
		audio.pause();
	}
}
