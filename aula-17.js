function teste(key) {
    switch(key) {
        case 'Gabriel':
        case 'Souza':
            console.log('GABRIEL AQUI')
            break;
        case 'Felipe':
            console.log('Felipe AQUI')
            break;
        case 'Barreto':
            console.log('Barreto AQUI')
            break;
        default:
            console.log('FOI O GB QUE FEZ')
            break;
    }
}

teste('Gabriel');
teste('Felipe');
teste('Barreto');
teste('gb');
