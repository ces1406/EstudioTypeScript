// Definicion y parametros:
function promedio (a:number,b:number,c:number=0,d?:number):string { // c:0->valor por default  d?:parametro opcional 
    let ret:number;
    if(d){
        ret=(a+b+c+d)/4
    }else{
        ret=(a+b+c)/3
    }
    return 'promedio-->'+ret;
}
console.log('promedio(2,6,4): ',promedio(2,6,4))

// Parametros REST:
function sumatoria (...params:number[]):number{
    let sum:number=0;
    params.forEach(e=>sum=+e);
    return sum;
}
console.log('sumatoria(2,6,4,5,6,77,7,7): ',sumatoria(2,6,4,5,6,77,7,7));

// Funciones Arrow:
const suma = (a:number,b:number)=> a+b;
console.log('suma(2,6): ',suma(2,6))

// Currying (funcion que se descompone en otras)
const multiplica = (a:number)=>(b:number)=>a*b //en lugar de tener->(a:number,b:number) es como q una arrow funciton dentro de otra arrow function
let op1 = multiplica(10);
let result1 = op1(5);
let result2 = multiplica (2)(3);