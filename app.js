function logName (name,surname){
	console.log(`${name} ${surname}`);
}
 logName ('anton','larichev');
function depositSumm (depositusd,ay,faiz){
const summ =depositusd*(1+faiz/12)**ay;
return summ;
}
const cevab1=depositSumm(1000,24,0.12);
//console.log(cevab1);
const cevab2=depositSumm(1000,48,0.10);
console.log(cevab1,cevab2);