const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

    if(altura.value != '' && peso.value != ''){

        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        if(imc <18.5){
            classification = 'Baixo peso'
        } else if(imc < 24.9 && imc > 18.5){
            classification ='Peso normal'
        }else if(imc < 29.9 && imc > 25){
            classification = 'Pré-obeso'
        }else if( imc < 34.9 && imc >30){
            classification = 'Obeso I'
        }else if( imc < 39.9 && imc >35){
            classification = 'Obeso II'
        }else if( imc >= 40){
            classification = 'Obeso III'
        }

        resultado.innerHTML = `IMC: ${imc} (${classification})`
    } else{
        resultado.innerHTML = 'Preencha os campos'
    }   
}

