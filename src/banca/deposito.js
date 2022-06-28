import { sendNotification } from "../others.js"

const depositarBtn = document.getElementById("depoBtn")
const cancelBtn = document.getElementById("cancelBtn")

function finalizarOperacion() {
    document.getElementById("depositoOculto").className = "depositoOculto"
    document.getElementById("bancaD").className = "bancaD"
    document.getElementById("bancaOP").className = "bancaOP"
}

depositarBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const balanceItemName = `balance:${localStorage.getItem("correo")}`
    const balance = parseFloat(localStorage.getItem(balanceItemName))
    const cantidadDeposito = parseFloat(document.getElementById("depositoInput").value)

    if ((balance + cantidadDeposito) > 900) {
        sendNotification("El limite de saldo en la cuenta es de $900")
    } else {
        localStorage.setItem(balanceItemName, balance + cantidadDeposito)
        finalizarOperacion()
        sendNotification("El deposito se realizó correctamente")
    }

})

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault()
    finalizarOperacion()
})