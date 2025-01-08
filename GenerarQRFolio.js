function replaceAll(str, find, replace) { return str.replace(new RegExp(find, 'g'), replace); }
// Obtener datos de el campo folio
var a=entry().field("Folio");
// a=replaceAll(a," ","%20");
var toSet= "https://qrcode.tec-it.com/API/QRCode?data="+a+"Coti9za&dpi=150&size=Medium";
message(toSet);
// set the field content 
entry().set("QrFolio",toSet);
