console.log('vasya' || 'oleg');
console.log(false || 'oleg');
console.log('vasya' || false);
console.log(false || false);//при или всегда выводит первый оперант true

console.log('vasya' && 'oleg');
console.log(false && 'oleg');// при или всегда будет выводить второй оперант если первый является true и всегда будет false если одно из выражений false
console.log('vasya' && false);
console.log(false && false);


let a= 'marina';
const username =a || 'petya';
console.log(username);

const isAdmin =true;
const filename =isAdmin && 'file mp.4';
console.log(filename);