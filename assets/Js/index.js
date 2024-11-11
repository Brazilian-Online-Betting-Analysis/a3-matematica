const openFormBtn = document.getElementById('btn-form');
const overlay = document.getElementById('overlay');
const formulario = document.getElementById('box-form');

openFormBtn.addEventListener('click', () => {
  formulario.style.display = 'flex';
  overlay.style.display = 'block';
});

function fecharFormulario() {
    formulario.style.display = 'none';
    overlay.style.display = 'none';
  }

overlay.addEventListener('click', () => {
  formulario.style.display = 'none';
  overlay.style.display = 'none';
});

function armazenarInformacoes() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;

  if (nome && email && telefone && endereco) {
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('endereco', endereco);

    alert('Informações armazenadas com sucesso!');
    formulario.style.display = 'none';
    overlay.style.display = 'none';
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}