const form = document.getElementById("contato")
const log = document.getElementById("log")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value;
    const mensagem = document.getElementById("mensagem").value

    log.innerText=JSON.stringify({
        name, email, mensagem
    })
})