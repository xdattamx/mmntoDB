function replaceAll(str, find, replace) { return str.replace(new RegExp(find, 'g'), replace); }
// Obtener datos de el campo folio
var a=entry().field("Folio");
// a=replaceAll(a," ","%20");
var toSet= "https://qrcode.tec-it.com/API/QRCode?data="+a+"Coliza&dpi=150&size=Medium";
message(toSet);
var b= "a+"Cotiza"
// set the field content 
message(b);
entry().set("QrFolio",toSet);
entry().set("barcode",b);
