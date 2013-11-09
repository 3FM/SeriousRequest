var js = require("./../client/api.json");
for(var i in js["wsdl:definitions"]["wsdl:types"]["s:schema"]["s:element"]) {
    var element = js["wsdl:definitions"]["wsdl:types"]["s:schema"]["s:element"][i];
    var furl = "function " + element["-name"] + "(";
    elements = [];
    if(element["s:complexType"] != undefined) {
	if(element["s:complexType"]["s:sequence"]["s:element"]["-minOccurs"] != undefined) {
	    elements = [element["s:complexType"]["s:sequence"]["s:element"]];
	} else {
	    elements = element["s:complexType"]["s:sequence"]["s:element"];
	}
    }
    elm = elements.map(function(i, o) {return i["-name"]});
    elm.push("callback");
    furl += elm.join(",") + ")";
    console.log(furl);
    console.log(" {");
    console.log("    $.get(\"/EventOnWidgetService.asmx/"+element["-name"]+"?" + (elements.map(function(i) {return i["-name"]+"=\"+"+(i["-name"])+"+\""}).join("&")) + "\", callback);");
    console.log("}");
}
