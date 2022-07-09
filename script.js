var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("colorAssigner");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";

css.textContent = body.style.background + ";";
}

function colorAssigner(){

	let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    color1.value = `#${randColor.toUpperCase()}`;
    let maxVal1  = 0xFF0000;
    let randomNumber1 = Math.random()*maxVal1;
    randomNumber1 = Math.floor(randomNumber1);
    randomNumber1 = randomNumber1.toString(16); 
    let randColor1 = randomNumber1.padStart(6,0); 
    color2.value = `#${randColor1.toUpperCase()}`;
    setGradient();

}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click",colorAssigner);

window.onload = colorAssigner;






// Write code so that the color inputs match the background generated on the first page load//

//currently color inputs are green and red when they should be red and yellow//








