function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function encriptar() {
    let texto = document.getElementById("inputText").value;
    
    if (!validarTexto(texto)) { 
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById("inputText").value;
    
    if (!validarTexto(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    // Ocultar los elementos con las clases 'muñeco', 'sin-mensaje' y 'instrucciones'
    document.querySelector('.muñeco').classList.add('hidden');
    document.querySelector('.sin-mensaje').classList.add('hidden');
    document.querySelector('.instrucciones').classList.add('hidden');

    // Mostrar el texto encriptado en el textarea dentro del rectángulo blanco
    document.getElementById("outputText").value = texto;
    document.getElementById("outputText").classList.remove('hidden');

    // Mostrar el botón de copiar
    document.querySelector('.boton-copiar').classList.remove('hidden');
}

function copiar() {
    let texto = document.getElementById("outputText").value;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}


