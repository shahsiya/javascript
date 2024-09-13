const yatirimci = 12000 ;
const faiz = yatirimci *0.07 ;
if (faiz*24>13500){
console.log('evinizi alabilirsiniz');
}
const kalanFaiz = ( faiz*24-yatirimci);
const template = `kalan bakiyeniz
${kalanFaiz}$`;
console.log(template);

