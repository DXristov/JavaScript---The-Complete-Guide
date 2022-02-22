const string = 'szxzshpswsp'
let highestOccurence = 0;
let letter = '';

function mostOccurringLetter() {
	for(i = 0; i < string.length; i++) {
		let currentOccurence = 0;
		for(y = i; y < string.length; y++) {
			if(string[i] == string[y]) {
				currentOccurence += 1;
			}
		}
		if(currentOccurence > highestOccurence) {
			letter = string[i];
			highestOccurence = currentOccurence;
		}
	}
	console.log(letter);
	console.log(highestOccurence);
}

mostOccurringLetter();