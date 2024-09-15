const isAdmin =true;
const canWrite = true;
console.log(`sistemny file ${isAdmin && canWrite}`);
console.log(`file ${isAdmin || canWrite}`);
console.log(`inver prava admin ${ !isAdmin }`);

const isEdited = true;
const isSuperAdmin = true;
console.log(`sistemny file red ${isAdmin && canWrite && (!isEdited ||isSuperAdmin )}`);
let a =22;
if (a=== -8 || a ===22){
	console.log(true);	
}else {
		console.log(false);
	}