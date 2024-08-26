function diminuir_preco(dados) {
    let preco = parseFloat(dados.preco.value);
    let qnt = parseInt(dados.qnt.value);

    if (qnt > 1) {
        qnt_final = qnt - 1;
        preco_total = preco * qnt_final;
        
        document.getElementById("preco_total").innerHTML = "R$" + preco_total.toFixed(2);
        dados.qnt.value = qnt_final;
    }
    
}

function aumentar_preco(dados) {
    let preco = parseFloat(dados.preco.value);
    let qnt = parseInt(dados.qnt.value);
    let qnt_final;
    let preco_total;

    qnt_final = qnt + 1;
    preco_total = preco * qnt_final;

    document.getElementById("preco_total").innerHTML = "R$" + preco_total.toFixed(2);
    dados.qnt.value = qnt_final;
}

function exibir_interface(inter) {
    inter.style.display = "flex";

    document.getElementById("nome_exibido").innerHTML = document.getElementById("nome_produto").innerHTML;
    document.getElementById("unidades").innerHTML = "Unidades: " + document.getElementById("qnt").value;
    document.getElementById("exibir_preco_total").innerHTML = "Valor Total: " + document.getElementById("preco_total").innerHTML;
}

function esconder_interface(inter) {
    inter.style.display = "none";
}

function confirmar_compra(dados) {
    let un = document.getElementById("qnt").value;
    let produto = document.getElementById("nome_exibido").innerHTML;
    let nome = dados.nome.value;
    let email = dados.email.value;
    let telefone = dados.telefone.value;
    let endereco = dados.endereco.value;
    let numero = dados.numero.value;
    let cidade = dados.cidade.value;
    let time = dados.horario.value;
    let horario = "o mais rápido possível!";



    if(nome != '' && email != '' && telefone != '' && endereco != '' && numero != '' && cidade != ''){
        if(time != ''){
            horario = "às " + time + "!";
        }
        document.getElementById("interface").style.display = "none";
        window.alert("Usuário " + nome + ", a sua encomenda: " + un + " un. do produto " + produto + ", chegará à " + endereco + " - " + numero + ", " + cidade + ", " + horario + "\n\nEntraremos em contato pelas seguintes fontes:\nEmail: " + email + "\nTelefone: " + telefone);
    } else {
        window.alert("Preencha todos os dados para confirmar a compra!")
    }
}