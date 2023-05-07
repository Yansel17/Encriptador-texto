

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiarTexto = document.querySelector(".btn-copiar")
copiarTexto.style.display = "none"

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function Validaciones(){
    let textoEscrito = textArea.value;
    let validador = textoEscrito.match(/^[^ÁÉÍÓÚÑáéíóúA-Z]+$/);

    if(!validador || validador === 0 || validador == ""){
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!Validaciones()){
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = "";
        mensaje.style.backgroundImage = "none"
        copiarTexto.style.display = "block"
    } 
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada   
}

function btnDesencriptar(){
    if(!Validaciones()){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    copiarTexto.style.display = "block"
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada  
}


function copiar(){
    mensaje.disabled = false;
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = "";
    alert("Texto Copiado")
    copiarTexto.style.display = "none"
    location.reload(true);
}



    
// #challengeonecodificador4