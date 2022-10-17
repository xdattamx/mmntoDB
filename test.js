function replaceAll(str, find, replace) { return str.replace(new RegExp(find, 'g'), replace); }
// get data to transmit obtener datos de
var a=entry().field("Folio");
// a=replaceAll(a," ","%20");

// var toSet= "http://chart.apis.google.com/chart?cht=qr&chs=450x450&chl="+a+""; message(toSet);

var toSet= "https://api.qrserver.com/v1/create-qr-code/?size=450x450&bgcolor=FFFFFF&color=FF3300&format=png&data="+a+""; message(toSet);


// set the field content 
 entry().set("QrFolio",toSet);
 
var toSet= "https://www.visusagencia.com/v2/wp-content/uploads/2022/06/Logotipo_Visus_Agencia_350px.png?h + guid()";  
message(toSet); 
// set the field content  
entry().set("logotipo",toSet);

result = http().get("https://www.visusagencia.com/@extranet/memento/visusdireccion.txt?h + guid()");
message(result.body);
var e = entry();
e.set("Empresa", result.body);

