const kgFiyati = 7 ;
const kmFiyati = 5 ;
function hesabkg (hediye) {
	return hediye * kgFiyati ;
}
function hesabkm (mesafe) {
	return mesafe * kmFiyati ;
}
function hesap (hediye1, hediye2, mesafe) {
	const  price1 = hesabkg(hediye1) ;
	const fiyat2 =hesabkg (hediye2);
	const mesafefiyati =hesabkm (mesafe);
	return price1 + fiyat2 + mesafefiyati ;
}
console.log(hesap(1,2,10));
