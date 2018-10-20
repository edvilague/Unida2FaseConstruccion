$(function(){
    var db = null;
    function loadDB() {
        db = OpenDatabase("db visitas", "1.0", "Base de datos visitantes", 200000);
        if (!db) {
            console.log("Error de conexión.");
        } else {
            db.transaction(function(tx){
                tx.executeSql('create table if not exists visitante(visitante int);');
            });
        }
    }
});