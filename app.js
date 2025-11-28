const enderecoUsuario = {
    rua: document.querySelector('#rua'),
    bairro: document.querySelector('#bairro'),
    cidade: document.querySelector('#cidade'),
    estado: document.querySelector('#estado'),
    cep: "06726486"
}

async function consultarCEP(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();
// Variável do tipo objeto para receber os dados do CEP do usuário
const dadosDoCEP = {
    rua: resposta.logradouro,
    bairro: resposta.bairro,
    cidade: resposta.localidade,
    estado: resposta.estado,
    uf: resposta.uf
}
inserirDados(dadosDoCEP)



console.log(dadosDoCEP)

}
consultarCEP(enderecoUsuario.cep)

function inserirDados(dadosDoCEP){
enderecoUsuario.rua.innerText = dadosDoCEP.rua
enderecoUsuario.bairro.innerText = dadosDoCEP.bairro
enderecoUsuario.cidade.innerText = dadosDoCEP.cidade
enderecoUsuario.estado.innerText = dadosDoCEP.estado
enderecoUsuario.uf.innerText = dadosDoCEP.uf
    
}