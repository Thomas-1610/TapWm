function validar(event) {
    const nome = document.formPrincipal.nome.value;
    const email = document.formPrincipal.email.value;
    const comentario = document.formPrincipal.comentario.value;
    const pesquisa = document.formPrincipal.pesquisa;

    if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        event.preventDefault();
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        event.preventDefault();
        return false;
    }

    // Usando document.formPrincipal.elements[] conforme a orientação
    const pesquisaValue = document.formPrincipal.elements['pesquisa'].value;
    
    if (pesquisaValue === "") {
        alert("Que bom que você voltou a visitar esta página!");
        event.preventDefault();
        return false;
    } else {
        alert("Volte sempre à está página!");
    }

    return true;
}
