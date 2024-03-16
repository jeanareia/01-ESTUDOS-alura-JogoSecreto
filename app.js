let ListaNumerosEscolhidos = [];
let RangeNumerosSecretos = 10;
let QuantidadeItensLista = 0;
let NumeroSecreto = GerarNumeroAleatorio();
//let NumeroSecreto = 7;
let Tentativas = 1;

function ExibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function ExibirTextoMensagemIniciar (){
    ExibirTextoNaTela('h1', 'Jogo do número secreto');
    ExibirTextoNaTela('p', `Escolha um número entre 1 e ${RangeNumerosSecretos}`);
} 

function verificarChute(){
    let chute = document.querySelector ('input').value;
    console.log(chute);
if(chute == NumeroSecreto){
    ExibirTextoNaTela ('h1', 'Acertou!');
    let PalavraTentativas = Tentativas > 1 ? 'tentativas' : 'tentativa';
    let MensagemTentativas = `Você acertou o número secreto com ${Tentativas} ${PalavraTentativas}`;
    ExibirTextoNaTela ('p', MensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    //document.getElementById('reiniciar').setAttribute('disabled',false);

}else{
    ExibirTextoNaTela ('h1', 'Não foi desta vez.');
    if(chute > NumeroSecreto){
        ExibirTextoNaTela ('p', 'Tente de novo, com um número menor agora');
    }else{
        ExibirTextoNaTela ('p', 'Tente de novo, com um número maior agora');
    }
    Tentativas++;
    LimparCampo ();
}
}

function GerarNumeroAleatorio() {
    let NumeroSorteado = parseInt(Math.random()*RangeNumerosSecretos+1);
    console.log ("O sorteado é ", NumeroSorteado);
    console.log ("Já foram sorteados ", ListaNumerosEscolhidos);
    QuantidadeItensLista = ListaNumerosEscolhidos.length;

    if (QuantidadeItensLista == RangeNumerosSecretos) {
        ListaNumerosEscolhidos = [];
    }
    else{
    if (ListaNumerosEscolhidos.includes(NumeroSorteado)){
        return GerarNumeroAleatorio();
    }
    else {
        ListaNumerosEscolhidos.push(NumeroSorteado);
        console.log (NumeroSorteado);
        return NumeroSorteado;
    }
    }
}

function LimparCampo(){
    chute = document.querySelector ('input');
    chute.value = '';
}

function ReiniciarJogo(){
    NumeroSecreto = GerarNumeroAleatorio();
    LimparCampo();
    Tentativas = 1;
    ExibirTextoMensagemIniciar();
    document.getElementById ('reiniciar').setAttribute('disabled',true);
}

ExibirTextoMensagemIniciar();