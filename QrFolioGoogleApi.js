function replaceAll(str, find, replace) { return str.replace(new RegExp(find, 'g'), replace); }
// get data to transmit obtener datos de
var a=entry().field("Folio");
// a=replaceAll(a," ","%20");

var toSet= "http://chart.apis.google.com/chart?cht=qr&chs=450x450&chl="+a+""; message(toSet);



// set the field content 
 entry().set("QrFolio",toSet);
