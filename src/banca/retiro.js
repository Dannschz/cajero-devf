import { sendNotification } from "../others.js"

const retirarBtn = document.getElementById("retiroBtn")
const backBtn = document.getElementById("backBtn")

function finalizarOperacion() {
    document.getElementById("retiroOculto").className = "retiroOculto"
    document.getElementById("bancaD").className = "bancaD"
    document.getElementById("bancaOP").className = "bancaOP"
}

retirarBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const balanceItemName = `balance:${localStorage.getItem("correo")}`
    const balance = parseFloat(localStorage.getItem(balanceItemName))
    const cantidadRetiro = parseFloat(document.getElementById("retiroInput").value)

    if ((balance - cantidadRetiro) < 10) {
        sendNotification("No puedes retirar esa cantidad")
    } else {
        localStorage.setItem(balanceItemName, balance - cantidadRetiro)
        finalizarOperacion()
        sendNotification("El retiro se realizó correctamente")
    }

})

backBtn.addEventListener("click", (e) => {
    e.preventDefault()
    finalizarOperacion()
})