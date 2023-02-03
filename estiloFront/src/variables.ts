// TIPOS: 
//      1.PRIMITIVOS: string, number, boolean, symbol, undefined, null, void, never
//      2.DINAMICOS-OBJETOS: array, any, tuple, enum, generics

// DECLARACIONES
var cadena1:string;
var numero1:number;
var bool1:boolean;
var cualq1:any;

var vec1:string[] = ['uno','dos','tres'];
var vec2:any[] = ['uno',444,false,'dos'];
var obj1:{nomb:string, edad:number};

// INTERFACE
interface InterfacePersona{
    nombre:string;
    edad:number
};
var persona1:InterfacePersona = {nombre:'juan',edad:55};

// TYPES
type TipoPersona={
    nombre:string;
    edad:number
}
var persona2:TipoPersona = {nombre:'jose',edad:44};

// ENUMS
enum tipoPersona{'blanco','negro','amarillo','petiso'};
const tipopers1:number =tipoPersona.amarillo; 
console.log('tipopers1: ',tipopers1);

// UNION
let union1:string|number;

// LITERALES
let literal1:'ARG'|'BRA'|'URU'|'COL';

// TUPLAS
let tupla1:[number,string,boolean];

// DICCIONARIO
interface mamiferoInterface {
    patas?:number; // OPCIONAL
    color:string|null; // NULLEABLE
    terrestre:boolean;
    readonly trepador:boolean; // SOLO-LECTURA
}
interface diccioMamiferoInterface{
    [index:string]:mamiferoInterface
}
let diccio1:diccioMamiferoInterface = {};
diccio1['ballena'] = {color:'gris',terrestre:false, trepador:false};
diccio1['perro'] = {patas:4,color:'gris',terrestre:true, trepador:true};
const animal1:mamiferoInterface = diccio1['ballena'];
animal1.color = 'marron';
animal1.patas = 0;
// animal1.trepador = false; --> da ERROR
delete diccio1['ballena'];