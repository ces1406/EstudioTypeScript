const nombres:string[]=['juana','silvio','carlos','ramona','pepe'];

class Padre{
    private apellido:string;
    private nombre:string;
    static nacionalidad:string ='Argentina'; //propiedad estática
    constructor(ap: string, nom: string, private edad: number){ // declarando así edad => se auto-define como atributo de la clase de forma simplificada
        this.apellido = ap;
        this.nombre = nom;
    }
    public saludar():void {
        console.log(`Hola ${this.getRandom()}, soy el Padre ${this.nombre} ${this.apellido} !`);
    }
    private getRandom():string {
        const tam = nombres.length;
        const ind = Math.floor(Math.random()*tam);
        return nombres[ind]
    }
}

let padre1:Padre = new Padre('perez','tomas',44);
padre1.saludar();
console.log(JSON.stringify(padre1))
