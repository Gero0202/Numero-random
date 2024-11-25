const numeroRandom = document.getElementById("numero-aleatorio")
const contenedor = document.getElementById("contenedor")
const boton = document.getElementById("boton")
const display = document.getElementById("para-escribir")

numeroRandom.innerText = "0"

boton.addEventListener("click", () =>{
    let aleatorio = Math.floor(Math.random() * 100)
    numeroRandom.innerText = aleatorio  
})


contenedor.addEventListener("submit", function(event){
    event.preventDefault()

    const numeroIngresado = parseInt(display.value)
    const numeroGenerado = parseInt(numeroRandom.innerText)


    let alerta = document.querySelector("#alerta-respuesta")
    if(!alerta){
    alerta = document.createElement("span")
    alerta.id = "alerta-respuesta"
    contenedor.appendChild(alerta)
    }

    if(isNaN(numeroIngresado)){
        alerta.textContent = "Por favor, ingrese un numero valido"
        display.value = ""
        return
    }

    const diferencia = Math.abs(numeroGenerado - numeroIngresado)

    if(numeroIngresado === numeroGenerado){
        alerta.textContent = "Correcto!"
    } else if (diferencia <= 5){
        alerta.textContent = "Estuviste cerca, era: " + numeroGenerado
    } else if (diferencia <= 15){
        alerta.textContent = "Cerca pero no tanto, era: " + numeroGenerado
    } else {
        alerta.textContent = "Estuviste muy lejos, era: " + numeroGenerado
    }
    display.value = ""

    

})
