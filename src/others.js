export function removeATMMenu(elementIdToShow, className) {
    document.getElementById(elementIdToShow).className = className
    document.getElementById("bancaD").className = "bancaDOculto"
    document.getElementById("bancaOP").className = "bancaOPOculto"
}

export function sendNotification(message) {
    const noty = document.getElementById("notification")
    noty.style.display = 'flex'
    noty.innerText = message

    setTimeout(() => {
        noty.style.display = 'none'
    }, 2000)
}