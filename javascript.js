var body = document.body;
var grabDivs = document.getElementsByTagName("div");
var gridsize = 1000;
var selectedColor = "grey";
var rainbowArray = [];
//create grid
createDivs(gridsize);
createPalette(Math.sqrt(gridsize));

for (var j=0; j < grabDivs.length; j++){
	if (grabDivs[j].className !== "palette"){
		grabDivs[j].addEventListener("click", changeColor);
	}
	else {
		grabDivs[j].addEventListener("click", selectColor);
	}
}


function createDivs(number){
	for (var i=0; i<number; i++){
		var newDiv = document.createElement("div");
		newDiv.className = "class"+number;
		newDiv.style.width = "5.1%";
		newDiv.style.float="left";
		newDiv.style.paddingBottom="5.1%";
		newDiv.style.margin="2px";
		newDiv.style.border = "1px solid black";
		body.appendChild(newDiv);
}} 

/* RANDOM PALLETTE
function createPalette(number){
	for (var i=0; i<number; i++){
		var color = getRandomColor();
		grabDivs[i].className= "palette";
		grabDivs[i].style.backgroundColor = ""+color+"";
	}
}
*/

function selectColor(){
	selectedColor = this.style.backgroundColor;
}


function changeColor(selected){
	this.style.backgroundColor = ""+selectedColor+"";
}

/* Random Color Generator
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
*/

function getRainbow(){
	for(var i = 0; i < Math.sqrt(gridsize); i++);
	var r = i*255;
	var g = i*255;
	var b = i*255;
	var rainbowColor = "rgb("+r+","+b+","+h+")";
	rainbowArray.push(rainbowColor);
}
