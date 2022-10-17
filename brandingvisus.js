var toSet = url; 
console.log(toSet):
message(toSet); 
// set the field content  
entry().set("logotipo",toSet);

result = http().get("https://www.visusagencia.com/@extranet/memento/visusdireccion.txt?h + guid()");
message(result.body);
var e = entry();
e.set("Empresa", result.body);
