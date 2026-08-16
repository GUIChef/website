const openMicrowave = new Audio("sounds/openMicrowave.wav");

function microwaveOpen(){
  document.getElementById("microwave").src="images/microwaveOpen.png"
  document.getElementById("microwave").title="This is an open microwave."
  document.getElementById("microwave").alt="This is an open microwave."
  document.getElementById("microwave").id="microwaveOpen"
  document.getElementById("microwaveButton").onclick=microwaveClose
}
function microwaveClose(){
	document.getElementById("microwaveOpen").src="images/microwave.png"
  document.getElementById("microwaveOpen").title="This is a microwave."
  document.getElementById("microwaveOpen").alt="This is a microwave."
  document.getElementById("microwaveOpen").id="microwave"
  document.getElementById("microwaveButton").onclick=microwaveOpen
}

function playSound(sound){
  sound.currentTime=0;
  sound.play();
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("microwaveButton").addEventListener("click",function(){playSound(openMicrowave);});
};
