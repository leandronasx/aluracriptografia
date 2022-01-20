let vogais = ["a", "e", "i", "o", "u"];
let criptografar = ["ai", "enter", "imes", "ober", "ufat"];
const textAreaCodificador = document.getElementById("codificador");
const card1 = document.getElementById("1");
const card2 = document.getElementById("2");

function chamarCripto(){
    let mensagem = criptografarMensagem(textAreaCodificador.value);
    if(card2.className = "desativado"){
        card2.classList.remove("desativado");
        card1.classList.add("desativado");
    }

    let mensagemCript = document.getElementById("mensagem-cript");
    mensagemCript.value = mensagem;
}
function criptografarMensagem(mensagem){
    let palavraCriptogafada = "";
    mensagem = mensagem.toLowerCase();
    for(let i=0; i<mensagem.length; i++){
        switch(mensagem[i]){
            case vogais[0]: palavraCriptogafada += criptografar[0]; break;
            case vogais[1]: palavraCriptogafada += criptografar[1]; break;
            case vogais[2]: palavraCriptogafada += criptografar[2]; break;
            case vogais[3]: palavraCriptogafada += criptografar[3]; break;
            case vogais[4]: palavraCriptogafada += criptografar[4]; break;
            default: palavraCriptogafada += mensagem[i];
        }
    }
    return palavraCriptogafada;
}

function chamarDescripto(){
    let mensagem = descriptografarMensagem(textAreaCodificador.value);
    if(card2.className = "desativado"){
        card2.classList.remove("desativado");
        card1.classList.add("desativado");
    }

    let mensagemCript = document.getElementById("mensagem-cript");
    mensagemCript.value = mensagem;
}

function descriptografarMensagem(mensagem){
    mensagem = mensagem.toLowerCase();
    for(let i=0; i<vogais.length; i++){
        mensagem = mensagem.replaceAll(criptografar[i], vogais[i]);
    } 
    return mensagem;
}

function copiarArea(){
    let mensagemCript = document.getElementById("mensagem-cript");
    let auxMensagem = mensagemCript.value;
    mensagemCript.select();
    document.execCommand("copy");
    mensagemCript.value =  "";
    mensagemCript.value = auxMensagem;
}