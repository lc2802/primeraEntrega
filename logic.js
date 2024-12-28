function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Valores no validos como parámetros");
        return;
    }

    let calculado = calculo(peso, altura/100);
    let respuesta = categorizar(calculado);  
    resultado.textContent = respuesta;
    resultado.style.display = "block"; 
    console.log(respuesta);

}

calculo = (peso, altura) => peso / (altura * altura);

function categorizar(calculado) {
    if (calculado >= 40) {
        categoria = `Su IMC es ${calculado.toFixed(2)}: Obesidad grado 3`;
    } else if (calculado >= 35 && calculado < 40) {
        categoria = `Su IMC es ${calculado.toFixed(2)}: Obesidad grado 2`;
    } else if (calculado >= 30 && calculado < 35) {
        categoria = `Su IMC es ${calculado.toFixed(2)}: Obesidad grado 1`;
    } else if (calculado >= 25 && calculado < 30) {
        categoria = `Su IMC es ${calculado.toFixed(2)}: Sobrepeso`;
    } else if (calculado >= 18.5 && calculado < 25) {
        categoria = `Su IMC es ${calculado.toFixed(2)}: Peso normal`;
    } else if (calculado < 18.5) {
        categoria = `Su IMC es ${calculado.toFixed(2)}: Bajo peso`;
    } else {
        categoria = "Por favor, vuelva a ingresar los datos correctamente.";
    }    
    return categoria;
}

