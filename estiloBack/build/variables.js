"use strict";
// TIPOS: 
//      1.PRIMITIVOS: string, number, boolean, symbol, undefined, null, void, never
//      2.DINAMICOS-OBJETOS: array, any, tuple, enum, generics
// DECLARACIONES
var cadena1;
var numero1;
var bool1;
var cualq1;
var vec1 = ['uno', 'dos', 'tres'];
var vec2 = ['uno', 444, false, 'dos'];
var obj1;
// INTERFACE
console.log('--------INTERFACE-------');
;
var persona1 = { nombre: 'juan', edad: 55 };
console.log('persona1:', persona1);
// TYPES
console.log('--------TYPES-------');
var persona2 = { nombre: 'jose', edad: 44 };
console.log('persona2:', persona2);
// ENUMS
console.log('--------ENUMS-------');
var tipoPersona;
(function (tipoPersona) {
    tipoPersona[tipoPersona["blanco"] = 0] = "blanco";
    tipoPersona[tipoPersona["negro"] = 1] = "negro";
    tipoPersona[tipoPersona["amarillo"] = 2] = "amarillo";
    tipoPersona[tipoPersona["petiso"] = 3] = "petiso";
})(tipoPersona || (tipoPersona = {}));
;
const tipopers1 = tipoPersona.amarillo;
console.log('enum tipoPersona:', tipoPersona);
console.log('tipopers1: ', tipopers1);
console.log('tipoPersona[tipopers1]:', tipoPersona[tipopers1]);
// UNION
let union1;
// LITERALES
let literal1;
//console.log('literal1:',literal1); --> Error la variable no esta asignada/inicializada
// TUPLAS
let tupla1;
// DICCIONARIO
console.log('--------DICCIONARIO-------');
let diccio1 = {};
diccio1['ballena'] = { color: 'gris', terrestre: false, trepador: false };
diccio1['perro'] = { patas: 4, color: 'gris', terrestre: true, trepador: true };
const animal1 = diccio1['ballena'];
animal1.color = 'marron';
animal1.patas = 0;
console.log('diccio1:', diccio1);
console.log('animal1:', animal1);
// animal1.trepador = false; --> da ERROR
delete diccio1['ballena'];
