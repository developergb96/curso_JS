const mensagem = 'Gabriel';
const mensagem2 = 'Felipe';
const mensagem3 = 'GABRIEL';

console.log(mensagem.length);
console.log(mensagem.concat(mensagem2));
console.log(mensagem + mensagem2);
console.log(mensagem.substring(2));
console.log(mensagem.substring(2, 5));

console.log('Quebrar em Array', mensagem.split(''));
console.log(mensagem.split(' '));
console.log(mensagem.split('b'));

console.log('Tamanho: ', mensagem.length);
console.log('Concat', mensagem.concat(mensagem2));
console.log('Concat +', mensagem + mensagem2);
console.log('Concat +', "barreto" + " " + mensagem + " " + mensagem2);
console.log('ES:', `Barreto ${mensagem} ${mensagem2}`);

console.log('UP:' , mensagem.toLocaleUpperCase());
console.log('DOWN:', mensagem3.toLowerCase());

console.log('Replace:', mensagem.replace('briel', 'brielzinho'));



