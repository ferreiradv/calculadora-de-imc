var altura = 1.94

var peso = 84

var imc = peso / (altura * altura)

var resIMC = ""

console.log(imc.toFixed(2))

if (imc <= 16.5){
    resIMC = 'Baixo peso Severo';
}
else if(imc >= 16.5 && imc < 18.5){
    resIMC = 'Baixo peso';
}
else if(imc >= 18.5 && imc < 25){
    resIMC = 'Normal';
}
else if(imc >= 25 && imc < 30){
    resIMC = 'Excesso de peso';
}
else if(imc >= 30 && imc < 35){
    resIMC = 'Obeso';
}
else if(imc >= 35 && imc < 40){
    resIMC = 'Clinicamente obeso';
}
else{
    resIMC = 'Obeso severo';
}

switch(resIMC){
    case 'Baixo peso Severo':
        console.log('imc menor que 15 ')
        break
    case 'Baixo peso':
        console.log('imc entre 16.5 e 18.5')
        break 
    case 'Normal':
        console.log('imc entre 18.5 e 25')
        break
    case 'Excesso de peso':
        console.log('imc entre 25 e 30')
        break
    case 'Obeso':
        console.log('imc entre 30 e 35')
        break
    case 'Clinicamente obeso':
        console.log('imc entre 35 e 40')
        break
    case 'Obeso severo':
        console.log('imc maior de 40')
        break
    default:
        console.log('houver algum erro')
        break

}

console.log(resIMC)