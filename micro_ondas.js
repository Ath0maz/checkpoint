let pipoca = "10 segundos"

function Menu(pipoca) {
    if(!pipoca){
        console.log("Prato Inexistente")
    }

    let mensagem;

    if(pipoca < 10){
        mensagem = console.log("Tempo Insuficiente")
    } else if(pipoca > 10 * 2 && pipoca <= 10 * 3){
        mensagem = console.log("A comida queimou")
    } else if(pipoca > 10 * 3){
        mensagem = console.log("KABUMMMM!")
    } else {
        mensagem = console.log("Prato pronto, bom apetite!")
    }

    console.log(mensagem)
}

Menu(pipoca,100)