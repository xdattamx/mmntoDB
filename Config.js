// libByName("Config");
//ConfigEntry = Config.findById(id); //search an entry in Spp by ID
// var test = "fp1";
// entryDefault().set("gui",guid());
var conf = libByName("Config");


// ConfigEntry = conf.findById("config"); //search an entry in Spp by ID

ConfigEntry = lib(config).findById(config)
message(ConfigEntry);
var CallId = conf[0].field("id");
//Mensaje de aviso opcional
message(CallId);


prevMileage = entries[0].field("Mileage"); 
