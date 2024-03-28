const QUANTIDADE = 6;

function numerosPares(valor){
    let contar = 0;
    let novoValor = valor;

    while(contar < QUANTIDADE) {
        if (novoValor  % 2 !==1) {
            console.log(novoValor);
            contar++
        }

        novoValor++;
    }
}

numerosPares(8)