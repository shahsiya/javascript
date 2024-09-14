const secretNumber  = '7';
if (Number(secretNumber) ===7){
console.log('угадал строго');
}
if (secretNumber==7){
	console.log('угадал не строго');
}
const q= Number(prompt('введите число'));

if (q===7){
	console.log('!');
}//===строгое равно == не строгое равно использовать лучше строгое равно