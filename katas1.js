
//de 1 a 20

umAte20(20)
function umAte20(limite){
for (let i = 1; i <= limite; i++) {
console.log('Numero ',i);
}
return umAte20;
}

//Numeros pares de 0 a 20
parAte20(20)
function parAte20(limite){
for (let i = 0; i <= limite; i++) {
if (i % 2 === 0)
console.log(i, 'Numero Par');
}
return parAte20;
}




//impares de 1 a 20

imparAte20(20)
function imparAte20(limite){
for (let i = 1; i <= limite; i++) {
if (i % 3 === 0)
console.log(i, 'Numero impar');
}
return imparAte20;
}



//de 5 a 100

mtpAte100(100)
function mtpAte100(limite){
for (let i = 1; i <= limite; i++) {
if (i % 5 === 0)
console.log(i, 'Multiplo de 5');
}
return mtpAte100;
}


//call function multiplesOfFive

//Não consegui achar um resultado


// conta de 20 a 1

vinteAteUm(1)
function vinteAteUm(limite){
for (let i = 20; i >= limite; i--) {
console.log('Numero ',i);
}
return vinteAteUm;
}


// numeros pares de 20 a 1



parVinteAteUm(1)
function parVinteAteUm(limite){
for (let i = 20; i >= limite; i--) {
if (i % 2 === 0)
console.log(i, 'Numero Par');
}
return parVinteAteUm;
}




// impares de 20 a 1

imparVinteAteUm(1)
function imparVinteAteUm(limite){
for (let i = 20; i >= limite; i--) {
if (i % 3 === 0)
console.log(i, 'Numero impar');
}
return imparVinteAteUm;
}


// multiplos de 100 a 5
mtpInverso(1)
function mtpInverso(limite){
for (let i = 100; i >= limite; i--) {
if (i % 5 === 0)
console.log(i, 'Numero múltiplo de 5');
}
return mtpInverso;
}

//numero multiplo inverso

//Não consegui achar um resultado