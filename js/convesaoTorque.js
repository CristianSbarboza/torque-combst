// libra-pe e Newton metro

// 1 lb.ft = 1,356 N.m
// 1 N.m = 0,738 lb.ft


// Libra-polegada e Newton metro

// 1 lb.in = 0,113 N.m

const formTorque = document.querySelector('#form-torque');
const containerTorque = document.querySelector('#container-torque')



formTorque.addEventListener('submit', (e) => {
    e.preventDefault();

    const unidadeMedida = document.querySelector("#unidade-medida").value

    const valorTorque = parseFloat(document.querySelector('#valor-torque').value)

    if(unidadeMedida === 'lbft-nm'){
        convertido = (valorTorque * 1.356).toFixed(3)
        convetidoToUnidade = 'N.m'
    }

    if(unidadeMedida === 'nm-lbft'){
        convertido = (valorTorque * 0.738).toFixed(3)
        convetidoToUnidade = 'lb.ft'
    }


    if(unidadeMedida === 'lbin-nm'){
        convertido = (valorTorque * 0.113).toFixed(3)
        convetidoToUnidade = 'N.m'
    }

    const resultadoAnterior = document.querySelector("#result-torque");
    if (resultadoAnterior) {
        resultadoAnterior.remove();
    }

    const containerResult = document.createElement("div");
    containerResult.classList.add("container-result");
    containerResult.id = "result-torque";
    containerResult.innerHTML = `<span>${convertido} ${convetidoToUnidade} </span>`;

    containerTorque.appendChild(containerResult)

    console.log(convertido, convetidoToUnidade)

})

