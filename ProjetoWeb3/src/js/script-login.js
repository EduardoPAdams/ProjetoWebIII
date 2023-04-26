

function login(){
    let senha = document.querySelector('#senha')
    let email = document.querySelector('#email')
    let vlsenha = senha.value
    let vlemail = email.value

    if(vlsenha == 0 || vlemail == 0){
        alert('Preencha todos os campos')
        if(vlemail == 0){
            email.focus()
        }else if(vlsenha == 0){
            senha.focus()
        }
    }else if(vlsenha.length < 6){
        alert('A senha precisa conter no mínimo 6 caracteres')
        senha.focus()
    }else{
        window.location = "index.html"
    }
}

document.querySelector('#submit').addEventListener('click', login)

