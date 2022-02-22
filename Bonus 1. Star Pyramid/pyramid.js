const star = '*';
const rows = 5;
const emptySpace = ' ';
let pyramid = '';

function makePyramid() {
	for(i = 0; i < rows; i++) {
		for(j = 1; j < rows - i; j++) {
			pyramid += emptySpace
		}
		for(y = 0; y <= i * 2; y++) {
			pyramid += star;
		}
		pyramid += '\n';
	}
	console.log(pyramid);
}
makePyramid();
