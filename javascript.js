var body = document.body;
var grabDivs = document.getElementsByTagName("div");
var gridsize = 100;
var selectedColor;
//create grid
createDivs(gridsize);
createPalette(Math.sqrt(gridsize));

for (var j=0; j < grabDivs.length; j++){
	if (grabDivs[j].className !== "palette"){
	grabDivs[j].addEventListener("click", changeColor);
	}
	else {
		grabDivs[i].addEventListener("click", selectColor);
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

function createPalette(number){
	for (var i=0; i<number; i++){
		var color = getRandomColor();
		grabDivs[i].className= "palette";
		grabDivs[i].style.backgroundColor = ""+ color +"";
	}
}

function selectColor(){
	selectedColor = this.style.backgroundColor;
}


function changeColor(selected){
	this.style.backgroundColor = "red";
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

