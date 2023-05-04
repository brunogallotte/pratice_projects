const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let formEValido = false;

function validaNome(nomeBeneficiario) {
    const nomeComoArray = nomeBeneficiario.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroConta = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `Você depositou com sucesso R$ <b>${valorDeposito.value}</b> na conta - <b>${numeroConta.value}</b>, beneficiário <b>${nomeBeneficiario.value}</b>`
    formEValido = validaNome(nomeBeneficiario.value);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';

    } else {
        const mensagemError = 'Preencha o nome do beneficiário completo!'
        const containerMensagemError = document.querySelector('.error-message');
        nomeBeneficiario.style.border = '1px solid red';
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    } 
})
