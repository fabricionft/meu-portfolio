
function travarTela() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function destravarTela() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
}

function gerarMessageBox(opcao){
    let mensagem = (opcao == 1) ? "Desculpe, o video do projeto ainda não foi postado" :
                                  "Desculpe, o site ainda não está no ar."

    $('#esconder').addClass('ativo')
    $('#mensagem').css("transform", "translateY(250px)").css('background', "rgb(253, 214, 214)");
    $('#textoMensagem').html(mensagem);
    $('#btnMessage').html("Ok");

    travarTela();
}

function fecharMessageBox(){
    destravarTela();
    $('#esconder').removeClass('ativo')
    $('#mensagem'). css("transform", "translateY(-250px)");
}