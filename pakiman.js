class Pakiman
{
    constructor(n,v,a)
    {
       
        this.nombre = n;
        this.imagen = new Image();
        this.vida = v;
        this.ataque = a;
        this.imagen.src= imagenes[this.nombre]
        }
    hablar (){alert(this.nombre)}   //LA INVOCO pokacho.hablar 
    mostrar(){
        
        document.write("<strong>" + this.nombre + "</strong><br/>"); 
        document.body.appendChild(this.imagen);
        document.write("<br/>Vida: " + this.vida + "<br/>"); 
    document.write("Ataque: " + this.ataque + "<hr/>"); 
}
}