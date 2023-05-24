const ativadorToast = document.getElementById('btn-toast');
const mensagem = document.getElementById('mensagens-alerta');
console.log('teste')

if (ativadorToast) {
    ativadorToast.addEventListener('click', function() {
        const toast = new bootstrap.Toast(mensagem);
        toast.show();
    })
}