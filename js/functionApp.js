const functionApp = document.querySelector('#function')

const functionCombustivel = document.querySelector('#container-combustivel')
const functionTorque = document.querySelector('#container-torque')


functionApp.addEventListener('change', function(){
    let functionSelect = this.value

    if(functionSelect === 'torque'){
        functionTorque.classList.remove('display-active')
        functionCombustivel.classList.add('display-active')
    }

    if(functionSelect === 'combustivel'){
        functionCombustivel.classList.remove('display-active')
        functionTorque.classList.add('display-active')
    }
    
})


