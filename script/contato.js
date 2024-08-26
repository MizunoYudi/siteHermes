function envia(dados) {
    let nome = dados.nome.value;
    let email = dados.email.value;
    let tel = dados.telefone.value;
    let opc_contato = dados.opc_contato.selectedIndex;
    let motivo = "";
    let descricao = dados.descricao.value;
    let mensagem = "";

    switch(opc_contato){
        case 0:
            motivo = "Reclamação";
            break;
        case 1:
            motivo = "Feedback";
            break;
        case 2:
            motivo = "Parceria";
            break;
        case 3:
            motivo = "Dúvida";
            break;
    }

    if (nome != '' && email != '' && tel != '' && descricao != '') {
        mensagem += nome + "<br>Email: " + email + "<br>Telefone: " + tel + "<br>Seu contato para " + motivo;
        mensagem += ", com a seguinte mensagem: <br>\"" + descricao + "\"<br> Foi enviada com sucesso para a Hermes!";
        document.getElementById("popup").style.display = "flex";
        document.getElementById("mensagem").innerHTML = mensagem;
    } else {
        window.alert("Preencha todos os campos antes de enviar!");
    }

}

function confirmar() {
    document.getElementById("popup").style.display = "none";
}