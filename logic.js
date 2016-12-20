function playSound(e){
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if(!audio){
		return;
	}
	key.classList.add("playing");
	audio.currentTime = 0;
	audio.play();
}

function removeTransform(e){
	if(e.propertyName !== "transform"){
		return;
	}

	e.target.classList.remove("playing");
}
var dom = document.querySelectorAll(".key");
var keys = Array.from(dom);
console.log(keys);
keys.forEach(function(key){
	return key.addEventListener("transitionend", removeTransform);
});

window.addEventListener("keydown", playSound);