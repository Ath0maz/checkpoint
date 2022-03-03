const pratos = {
    1: { nome: 'Pipoca', tempo: 10 },
    2: { nome: 'Macarrão', tempo: 8 },
    3: { nome: 'Carne', tempo: 15 },
    4: { nome: 'Feijão', tempo: 12 },
    5: { nome: 'Brigadeiro', tempo: 8 },
};

function Menu(numeroPrato, tempo) {
    const prato = pratos[numeroPrato];

    if (!prato) {
        return console.log('Prato inexistente');
    }

    let mensagem;

    const tempoPadrao = prato.tempo;

    let tempoContador = tempo;

    if (tempo < tempoPadrao) {

        mensagem = 'Tempo insuficiente';

        console.log(mensagem);

    } else if (tempo == (tempoPadrao * 3)) {
        for (let i = 0; i < tempoContador; i++) {
            let time = (1000 * i);
            setTimeout(() => {
                i++;
                console.log(i);
                if (i == tempoContador) {
                    console.log('KABUMMM!!');
                };
            }, time)
        }
    } else if (tempo == (tempoPadrao * 2) && tempo < (tempoPadrao * 3)) {
        for (let i = 0; i < tempoContador; i++) {
            let time = (1000 * i);
            setTimeout(() => {
                i++;
                // console.log(i);
                if (i == tempoContador) {
                    console.log('A comida queimou');
                };
            }, time);
        }
    } else {
        for (let i = 0; i < tempoContador; i++) {
            let time = (1000 * i);
            setTimeout(() => {
                i++;
                console.log(i);
                if (i == tempoContador) {
                    console.log('Prato pronto, bom apetite!!!');
                };
            }, time);
        }
    }
}

Menu(1, 50)