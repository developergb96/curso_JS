//ex1
const idade = 18;
let podeEntrar = false;

if(idade >= 18) {
 podeEntrar = true;
}
console.log('Usuario pode entrar?', podeEntrar);
// ----------------------------------------------//

//ex2
const idade2 = 17;
if(idade2 >= 18) {
    podeEntrar = true;
} else {
    console.log('NÃO ENTRA!');
}
// ----------------------------------------------//

//ex3 ||
const idade3 = 17;
const nome = 'gb';

if(idade3 >= 18 || nome === 'gb') {
    podeEntrar = true;
    console.log('entrou!')
} else {
    console.log('NÃO entre!');
}
// ----------------------------------------------//

//ex4 &&
const idade4 = 15;
const name = 'gb';

if(idade4 >= 16 && name === 'gb') {
    console.log('Entra ai');
} else {
    console.log('Acesso não autorizado');
}
// ----------------------------------------------//

//ex5
//  1 = -> atribuiçao
//  2 == -> comparativo
//  3 === -> comparativo mais preciso

const idade5 = 28;

if(idade5 === '28'){
    console.log('Entra ai mano');
} else {
    console.log('Acesso negado!');
}