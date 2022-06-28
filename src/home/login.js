import { saveUserData } from '../localStorage.js'
import users from '../users.js'

export default function login(email, password, divLogin, banca, logoutButton, clientName) {
    const userValido = users.find((user) => (user.correo === email.value))
    const error = document.getElementById("error")

    if (userValido) {
        if (userValido.contraseña === password.value) {
            saveUserData(userValido)
            divLogin.className = "divLoginOculto"
            banca.className = "showBanca"
            logoutButton.style.display = "flex"
            clientName.innerText = userValido.nombre
            // document.getElementById("welcome").innerText = `Bienvenido ${userValido.nombre}`

        } else {
            error.textContent = " Error, intentalo de nuevo"
        }
    } else {
        error.textContent = " Error, correo invalido"
    }

}