export function saveUserData({ nombre, correo, balance }) {
    localStorage.setItem("nombre", nombre)
    localStorage.setItem("correo", correo)
    if (!localStorage.getItem(`balance:${correo}`)) {
        localStorage.setItem(`balance:${correo}`, balance)
    }
}

export function logout(divLogin, banca, clientName) {
    localStorage.removeItem("correo")
    localStorage.removeItem("nombre")
    divLogin.className = "divLogin"
    banca.className = "bancaOculta"
    document.getElementById("logoutButton").style.display = "none"
    clientName.innerText = ""
}
