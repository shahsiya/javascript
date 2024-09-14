const role ='ce';
if(role ==='meneger'){
	console.log('meneger');
}
else if (role=== 'admin'){
	console.log('admin');
}
else if (role=== 'ceo'){
	console.log('ceo');
}	else{
		console.log('seni bilmiyoruz');
	}


	switch (role){
		case 'meneger':
			console.log('meneger');
			break;
			case 'admin':
				console.log('admin');
				break;
				case 'ceo':
					console.log('ceo');
					break;
	}
switch (role){
	case 'meneger'://provalivaniye
	case 'admin':
	console.log('ne rukovoditel');
	break;
	case 'ceo':
		console.log('rukovoditel');
		break;
		default:
			console.log('seni bilmiyoruz');
}
const num = 1;
switch(true){
	case num > 0:
		console.log('dogru');
		break;
case num < 0:
	console.log('yanlis');
	break;
	default:
		console.log('0');
}