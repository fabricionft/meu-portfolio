window.onload = () =>{
    carregarTema();
}

function carregarTema(){
    const html = $('html');

    if(localStorage.getItem('tema') == "escuro"){
        $('meta[name="theme-color"]').attr('content', "rgb(20, 20, 20)");
        html.removeClass('temaClaro');
        html.addClass('temaEscuro');
        $('#circulo').addClass('ativo');
        $('#circulo').css('transform', "translateX(23.5px)");

        $('#youtubeSobre').attr('src', "img/dark-theme/youtube.png");
        $('#linkedinSobre').attr('src', "img/dark-theme/linkedin.png");
        $('#githubSobre').attr('src', "img/dark-theme/github.png");
        $('#emailSobre').attr('src', "img/dark-theme/email.png");
        $('#instagramSobre').attr('src', "img/dark-theme/instagram.png");
        $('#wppSobre').attr('src', "img/dark-theme/wpp.png");
    }
    else{
        $('meta[name="theme-color"]').attr('content', "#fff");
        html.removeClass('temaEscuro');
        html.addClass('temaClaro');
        $('#circulo').removeClass('ativo');
        $('#circulo').css('transform', "translateX(0px)");

        $('#youtubeSobre').attr('src', "img/light-theme/youtube.png");
        $('#linkedinSobre').attr('src', "img/light-theme/linkedin.png");
        $('#githubSobre').attr('src', "img/light-theme/github.png");
        $('#instagramSobre').attr('src', "img/light-theme/instagram.png");
        $('#emailSobre').attr('src', "img/light-theme/email.png");
        $('#wppSobre').attr('src', "img/light-theme/wpp.png");
    }
}

function alterarTema(){
    localStorage.setItem('tema', ($('#circulo').hasClass('circulo ativo')) ? "claro" : "escuro");
    carregarTema();
}