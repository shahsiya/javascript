//let yas =25;
//const is = false;
//const kredimac = 1500;
//const kredimac2 = 100;
//const kredimacis = 500;
 //const kredimac3 = yas>24?kredimac+kredimacis:kredimac+kredimac2;
function inceleme1(yas,is=false){
switch (true) {
	case yas>24&&is:
		return 500;
		case yas>24:
			return 100;
			default:
				return 0;}
} 

function inceleme(yas,para,mac,is=false){
const kredi = inceleme1(yas,is);
return mac<=para+kredi;
}
console.log(inceleme(25,1900,2000))  ;