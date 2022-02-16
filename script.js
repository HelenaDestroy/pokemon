var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
imagenes["Marseno"] = "cerdito.png";

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman ("Tocinauro", 120, 40);
var marseno = new Pakiman ("Marseno", 70, 150);

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman ("Tocinauro", 120, 40));
coleccion.push(new Pakiman ("Marseno", 70, 150));
for (var pakimanes of coleccion){
    pakimanes.mostrar();
    }