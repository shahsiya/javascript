// Порядок операторов
const isSuited = 100-10 > 90-5 ;
console.log(isSuited);
//100-10 (12 приоритет)>(10 приоритет) 90-5 (12 приоритет)реальная таблицы отличается на одну единицу
// ссылка на таблицу https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const a = (6+10)/2 ;
console.log(a) ;

let b;
let c ;
b=c=100+50 ;
console.log(b) ;
console.log(c) ;