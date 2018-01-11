
function play(audioType){
	
	switch(audioType) {
		case 'jazz':
			var audio = document.getElementById("jazz");
			audio.play();
			break;
		case 'rain':
			var audio = document.getElementById("rain");
			audio.play();
			break;
		case 'noise':
			var audio = document.getElementById("noise");
			audio.play();
			break;
	}
}


// function play(audioType){
// 	if(audioType === 'jazz'){
// 		var audio = document.getElementById("jazz");
// 		audio.play();
// 	}
// }
