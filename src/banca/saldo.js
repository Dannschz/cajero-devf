function finalizarOperacion() {
    document.getElementById("saldoOculto").className = "saldoOculto"
    document.getElementById("bancaD").className = "bancaD"
    document.getElementById("bancaOP").className = "bancaOP"
}

document.getElementById("saldoBack").addEventListener("click", (e) => {
    e.preventDefault()
    finalizarOperacion()
})