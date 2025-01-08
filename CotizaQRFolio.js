// Genera QR de imagen y estabelce el campo barcode 
// https://github.com/xdattamx/mmntoDB/blob/main/CotizaQRFolio.js
// para usarse en el modulo de cotizaciones de VisusERP
function replaceAll(str, find, replace) { return str.replace(new RegExp(find, 'g'), replace); }
// Obtener datos de el campo folio
var a = entry().field("Folio");
// a = replaceAll(a, " ", "%20");
// Nueva variable que combina el valor del campo "Folio" con la palabra "Cotiza"
var combinedValue = "Cotiza-" + a ;
var b = combinedValue;
var toSet = "https://qrcode.tec-it.com/API/QRCode?data=" + b + "&dpi=150&size=Medium";
// message(toSet);
// set the field content 
message(b);
entry().set("QrFolio", toSet);
entry().set("barcode", b);
