$(document).ready(onDeviceReady);
window.passreal;
window.passfalsa;
window.passestado;
var name = device.name;
if(name.indexOf("iP") > -1){
	var devicePlatform="iOS";
}else{
	var devicePlatform="Android";
}
var db;
var d = new Date();
// PhoneGap is ready
//
function onDeviceReady() {

    var dbSize = 200000;
    var dbName = "TMD";
    var dbVersion = "1.0";
    var dbDisplayName = "TMDDatabase";

    //Init DB
    //
    db = window.openDatabase(dbName, dbVersion, dbDisplayName, dbSize);
	db.transaction(selectPass, errorCB);
	window.base=db;
}
function errorCB(tx, err) {
    alert("Error processing SQL: " + err);
}

// Transaction success callback
//
function successCB() {
    //alert("Success!");
    //Select query
    //
}

function selectPass(tx) {
    tx.executeSql('SELECT * FROM PASS', [], querySuccess, errorCB);
}

function querySuccess(tx, rs) {
    // this will be empty since no rows were inserted.

    for (var i = 0; i < rs.rows.length; i++) {
        var p = rs.rows.item(i);
        //var element = parseHistSelect(p.min, p.max, p.note, p.dd, p.mm, p.yy, p.hs, p.minut);
	//alert("verdadera: "+p.pass_true);
	//alert("Falsa: "+p.pass_false);
	window.passreal=p.pass_true;
	window.passfalsa=p.pass_false;
	window.passestado=p.pass_estado;
	if(p.pass_estado!=0){
		verificarPanico();
	}
    }
}

