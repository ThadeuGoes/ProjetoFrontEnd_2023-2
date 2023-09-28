
function consultaEndereco() {
    let cep = document.querySelector('#cep').value;

    if (cep.length !== 8) {
        alert('CEP invalido');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function (response) {
        response.json().then(function(data){
            console.log(data);
            mostrarEndereco(data);
        })
    });
}

function mostrarEndereco(dados){
    let resultados = document.querySelector('#resultado');
    resultado.innerHTML=`<p>endereço: ${dados.logradouro}</p>
                        <p>bairro: ${dados.bairro}</p>
                        <p>cidade: ${dados.localidade}</p>`
}
