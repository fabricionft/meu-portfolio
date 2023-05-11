window.onload = () =>{
    setarTema(localStorage.getItem('tema'));
}

function setarTema(valor){
    let tema = (valor != null) ? valor : "claro";
    localStorage.setItem('tema', tema);
    $('#tema').val(tema);
    alterarTema(tema);
}

function alterarTema(tema){
    if(tema == "escuro"){
        document.body.style.setProperty('--branco', 'rgb(54, 54, 54)');
        document.body.style.setProperty('--roxo-claro', 'rgb(33, 33, 33)');

        document.body.style.setProperty('--cinza', '#fff');
        document.body.style.setProperty('--preto', '#fff');

        document.body.style.setProperty('--azul', 'rgb(73, 155, 255)');
        document.body.style.setProperty('--roxo', '#cba0ff');

        document.body.style.setProperty('--roxo-escuro', 'rgb(132, 119, 214)');
       
        $('#barraInferior').css('background', "#cba0ff");

        //icons sobre
        $('#youtubeSobre').attr('src', "img/dark-theme/youtube-sobre.png");
        $('#emailSobre').attr('src', "img/dark-theme/email.png");
        $('#wppSobre').attr('src', "img/dark-theme/wpp-sobre.png");
        $('#linkedinSobre').attr('src', "img/dark-theme/linkedin.png");
        $('#githubSobre').attr('src', "img/dark-theme/github.png");
        $('#instagramSobre').attr('src', "img/dark-theme/instagram.png");

        //Icons contatos
        $('#githubFooter').attr('src', "img/dark-theme/github.png");
        $('#linkedinFooter').attr('src', "img/dark-theme/linkedin.png");
        $('#wppFooter').attr('src', "img/dark-theme/wpp-contatos.png");
        $('#instagramFooter').attr('src', "img/dark-theme/instagram.png");
        $('#youtubeFooter').attr('src', "img/dark-theme/youtube-contatos.png");
    }
    else{
        document.body.style.setProperty('--branco', '#fff');
        document.body.style.setProperty('--roxo-claro', 'rrgb(253, 252, 255)');

        document.body.style.setProperty('--cinza', 'rgb(158, 158, 158)');
        document.body.style.setProperty('--preto', '#000');

        document.body.style.setProperty('--roxo', 'rgb(136, 118, 255)');
        document.body.style.setProperty('--roxo-escuro', 'rgb(103, 89, 193)');

        $('#barraInferior').css('background-image', "linear-gradient(to right, #cba0ff, rgb(123, 250, 212))");

        //icons sobre
        $('#youtubeSobre').attr('src', "img/light-theme/youtube-sobre.png");
        $('#emailSobre').attr('src', "img/light-theme/email.png");
        $('#wppSobre').attr('src', "img/light-theme/wpp-sobre.png");
        $('#linkedinSobre').attr('src', "img/light-theme/linkedin.png");
        $('#githubSobre').attr('src', "img/light-theme/github.png");
        $('#instagramSobre').attr('src', "img/light-theme/instagram.png");

        //icons contatos
        $('#githubFooter').attr('src', "img/light-theme/github.png");
        $('#linkedinFooter').attr('src', "img/light-theme/linkedin.png");
        $('#wppFooter').attr('src', "img/light-theme/wpp-contatos.png");
        $('#instagramFooter').attr('src', "img/light-theme/instagram.png");
        $('#youtubeFooter').attr('src', "img/light-theme/youtube-contatos.png");
    }
}