document.addEventListener("DOMContentLoaded", function () {
	const numButton = document.getElementById('numButton');
	numButton.addEventListener('click' , function () {
		let userInput = Number(window.prompt("Type the number of squares per row" , ""));
		while(userInput > 100 || userInput <= 0)
		{
			alert("choose Number between 1 and 100");
			userInput = Number(window.prompt("Type the number of squares per row" , ""));
		}
		createDiv(userInput);
	});
});

function createDiv(num)
{
	const parentDiv = document.getElementById("squareDivs");
	parentDiv.style.position = 'relative';

	while (parentDiv.firstChild) {
		parentDiv.removeChild(parentDiv.firstChild);
	}

	const width = parentDiv.offsetWidth;
	const height = parentDiv.offsetHeight;

	console.log(`${width , height}`);

    const divSize = Math.min(width, height) / num; 

	console.log(`Child Div Size: ${divSize} , size: ${num}`);

	for (let i = 0; i < num; i++)
	{
		for (let j = 0; j < num; j++)
		{
			let divC = document.createElement('div');

			divC.className = 'childDiv' + (i*j);
			divC.style.backgroundColor = 'white';
			divC.style.width = divSize + "px";
			divC.style.height = divSize  + "px";
	
			divC.addEventListener('mouseover', (event) => {
				event.target.style.backgroundColor = 'rgb(202, 202, 202)'
			});
			
			parentDiv.appendChild(divC);
		}
	}

}