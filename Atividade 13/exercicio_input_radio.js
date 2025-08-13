const inputTexto = document.getElementById('texto');
const radioMaiuscula = document.getElementById('maiuscula');
const radioMinuscula = document.getElementById('minuscula');

function transformarTexto() {
    if (radioMaiuscula.checked) {
        inputTexto.value = inputTexto.value.toUpperCase();
    } else if (radioMinuscula.checked) {
        inputTexto.value = inputTexto.value.toLowerCase();
    }
}

radioMaiuscula.addEventListener('change', transformarTexto);
radioMinuscula.addEventListener('change', transformarTexto);
