function iniciar() {
	var audio = document.getElementById('pista1');
	var anima = document.getElementById('anima1');
	var gif = document.getElementById('gif');
	if (anima.style.opacity==1) {
		audio.play();
		anima.style.opacity=0;
		gif.style.opacity=1;
	}
	else
	{
		audio.pause();
		audio.currentTime=0;
		gif.currentTime=0;
        anima.style.opacity=1;
		gif.style.opacity=0;
	}	
}