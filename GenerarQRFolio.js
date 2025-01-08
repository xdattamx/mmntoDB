function replaceAll(str, find, replace) { return str.replace(new RegExp(find, 'g'), replace); }
// Obtener datos de el campo folio
var a = entry().field("Folio");
var b = entry().field("cotización");
// a = replaceAll(a, " ", "%20");
var toSet = "https://qrcode.tec-it.com/API/QRCode?data=" + a + "Coliza&dpi=150&size=Medium";
// message(toSet);

// Nueva variable que combina el valor del campo "Folio" con la palabra "Cotiza"
var combinedValue = a + "Cotiza";
var c = a + b;

// var b = combinedValue;
// set the field content 
message(b);
entry().set("QrFolio", toSet);
entry().set("barcode", c);
