import { logout } from "./src/localStorage.js"
import login from "./src/home/login.js"
import { removeATMMenu } from "./src/others.js"
import './src/banca/deposito.js'
import './src/banca/retiro.js'
import './src/banca/saldo.js'

const email = document.getElementById("email")
const pwd = document.getElementById("password")


const divLogin = document.getElementById("divLogin")
const banca = document.getElementById("Banca")
const clientName = document.getElementById("clientName")
const loginButton = document.getElementById("loginButton")
const logoutButton = document.getElementById("logoutButton")

const nombre = localStorage.getItem('nombre')
const correo = localStorage.getItem('correo')

if (nombre && correo) {
    divLogin.className = "divLoginOculto"
    banca.className = "showBanca"
    clientName.innerText = nombre
} else {
    logoutButton.style.display = "none"
    clientName.innerText = ""
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    login(email, pwd, divLogin, banca, logoutButton, clientName)
})

logoutButton.addEventListener("click", (e) => {
    e.preventDefault()
    logout(divLogin, banca, clientName)
})

// Sección de Banca
const depositoBtn = document.getElementById("deposito")
const retiroBtn = document.getElementById("retiro")
const saldoBtn = document.getElementById("saldo")

depositoBtn.addEventListener("click", (e) => {
    e.preventDefault()
    removeATMMenu("depositoOculto", "deposito")
})

retiroBtn.addEventListener("click", (e) => {
    e.preventDefault()
    removeATMMenu("retiroOculto", "retiro")
})

saldoBtn.addEventListener("click", (e) => {
    e.preventDefault()
    removeATMMenu("saldoOculto", "saldo")
    const correo = localStorage.getItem("correo")
    document.getElementById("saldoTitle").innerText = `Tu saldo es de: $${Number(localStorage.getItem(`balance:${correo}`)).toFixed(2)}`
})
