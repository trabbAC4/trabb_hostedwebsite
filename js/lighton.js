var isOn = false; //global variable
function changeImage() {
	var image = document.getElementById('bulb');
	if (isOn) {
		image.src = "pics/light_bulb_off.jpg";
		isOn = false;
	}
	else {
		image.src = "pics/light_bulb_On.jpg";
		isOn = true;
	}
}
function changeCaption() {
	var caption = document.getElementById('myCaption');
	if (isOn){
		caption.innerHTML = "Let there be light";
	}
	else {
		caption.innerHTML = "In the beginning there was darkness"
	}
}
var i=0;
function counter(){
	i++;
	var cntr= document.getElementById("c")
	cntr.innerHTML = i;
}
function lightSwitch() {
	changeImage();
	changeCaption();
	counter()
}