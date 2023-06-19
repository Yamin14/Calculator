
window.onload = function() {
	
	//declarations
	let btn = new Array();
	let temp = "";
	let input = document.getElementById("input");
	let result = document.getElementById("result");
	let btnVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "+", "-", "*", "/", "Delete", "Clear", "="];

	//buttons
	for (let i = 0; i < btnVals.length; i++) {
		temp = "btn" + btnVals[i];
		btn.push(document.getElementById(temp));
		btn[i].value = btnVals[i];
	}

	//text buttons functions
	for (let i = 0; i < btnVals.length; i++) {
		if (btnVals[i] == "Delete") {
			break;
		}
	
		btn[i].onclick = function() {
			input.textContent += btn[i].value;
		}
	}

	//delete function
	btn[btnVals.indexOf("Delete")].onclick = function() {
		input.textContent = input.textContent.slice(0, -1);
	}
	
	//clear button
	btn[btnVals.indexOf("Clear")].onclick = function() {
		input.textContent = "";
	}

	//equal button
	btn[btnVals.indexOf("=")].onclick = function() {
		let text = input.textContent;
		try {
			result.textContent = eval(text);
		} catch(err) {
			result.textContent = "Invalid Expression!";
		}
	}

}