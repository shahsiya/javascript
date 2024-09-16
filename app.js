function canAccessWebsite(yas){
	if (yas <18){
		return 'hayir';
	}
	return 'evet';
}
console.log(canAccessWebsite(17));
const canAccessWebsite2 = yas=>yas<18?'hayir':'evet';
console.log(canAccessWebsite2(18));