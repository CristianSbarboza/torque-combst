const formCombustivel = document.querySelector('#form-combustivel');
const containerCombustivel = document.querySelector("#container-combustivel");

formCombustivel.addEventListener("submit", (e) => {

    e.preventDefault()
        
    const remanecente = parseFloat(document.querySelector("#remanecente").value);
    const quilos = parseFloat(document.querySelector("#quilos").value);

    calculoLitros = (quilos - remanecente) / 0.8;
        
    const resultadoAnterior = document.querySelector("#result-combustivel");
    if (resultadoAnterior) {
        resultadoAnterior.remove();
    }

    const containerResult = document.createElement("div");
    containerResult.classList.add("container-result");
    containerResult.id = "result-combustivel";
    containerResult.innerHTML = `<span>${calculoLitros.toFixed(2)} Litros</span>`;

    containerCombustivel.appendChild(containerResult)


});

