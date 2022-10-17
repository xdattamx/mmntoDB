function replaceAll(str, find, replace) { return str.replace(new RegExp(find, 'g'), replace); }
// get data to transmit obtener datos de
var a=entry().field("Folio");
// a=replaceAll(a," ","%20");

// var toSet= "http://chart.apis.google.com/chart?cht=qr&chs=450x450&chl="+a+""; message(toSet);

var toSet= "https://api.qrserver.com/v1/create-qr-code/?size=450x450&bgcolor=FFFFFF&color=FF3300&data="+a+""; message(toSet);


// set the field content 
 entry().set("QrFolio",toSet);
