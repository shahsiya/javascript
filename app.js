const money = 50;
if  (money > 50){
	console.log('urunumuzu alabilirsiniz');
}
else if (money >5){
	console.log('frkli urun alabilirsiniz');
}
else {
	console.log('bakiyeniz yetersiz');
}
console.log('selamlar');//взаимоисключающие операторы по этому если условие везде соблюдено то выподнится первое а остальные игнорируются так как условия выполняются по очереди сверху вниз