const form = document.getElementById('form-contato');
const inputNome = document.getElementById('nome-contato');
const inputTelefone = document.getElementById('telefone-contato');

let linhas = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();

  handleNewContato();

})

function handleNewContato() {
  const inputNome = document.getElementById('nome-contato');
  const inputTelefone = document.getElementById('telefone-contato');

  let linha = '<tr>';
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${inputTelefone.value}</td>`;
  linha += '</tr>';

  linhas += linha;

  inputNome.value = '';
  inputTelefone.value = '';

  atualizarTabela();


}

function atualizarTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
  alert("MENSSAGEM\nContato cadastrado com sucesso!")
}