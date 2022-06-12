function drawChess() {

	let field = document.createElement('div');
	document.body.appendChild(field);
	field.classList.add('field');

	let block;
	let flag = true;
	let lettersArr = ['A', 'B', 'C', 'D', 'E', 'F' , 'G', 'H']
	let lettersReversedArr = lettersArr.slice().reverse();
	let numbersArr = [1, 2, 3, 4, 5, 6 , 7, 8];
	let numbersReversedArr = numbersArr.slice().reverse();
	console.log(lettersReversedArr);
	console.log(lettersArr);
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			if (j == 0) {
				flag = !flag;
			}

			block = document.createElement('div');
			block.classList.add('block');

			if ((i == 0 || i == 9) && 
					!(i == 0 && j > 0 && j < 9) && 
					!(i == 9 && j > 0 && j < 9)) {
				block.classList.add('block');
			}
			else if ((j == 0 || j == 9) && 
							!(i > 0 && i < 9 && j == 0) && 
							!(i > 0 && i < 9 && j == 9)){
				block.classList.add('block');
			}
			else if (i == 0 && j > 0 && j < 9) {
				block.innerText = `${lettersReversedArr[j-1]}`;
				block.classList.add('text');
				block.classList.add('flip-over-text');
			}
			else if (i > 0 && i < 9 && j == 0) {
				block.innerText = `${numbersArr[i-1]}`;
				block.classList.add('text');
			}
			else if (i == 9 && j > 0 && j < 9) {
				block.innerText = `${lettersArr[j-1]}`;
				block.classList.add('text');
			}
			else if (i > 0 && i < 9 && j == 9) {
				block.innerText = `${numbersReversedArr[i-1]}`;
				block.classList.add('text');
				block.classList.add('flip-over-text');
			}
			else if (flag) {
				block.classList.add('black');
			}
			else {
				block.classList.add('white');
			}

			field.appendChild(block);
			console.log(block);
			flag = !flag;
		}
	}
}
drawChess();