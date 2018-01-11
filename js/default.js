
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
	}
	
	if(!audio.paused){
		audio.play();
	}else{
		audio.pause();
	}

}


// function play(audioType){
// 	if(audioType === 'jazz'){
// 		var audio = document.getElementById("jazz");
// 		audio.play();
// 	}
// }
