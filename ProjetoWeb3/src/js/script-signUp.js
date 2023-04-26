

function signUp(){
    let nome = document.querySelector('#nome')
    let email = document.querySelector('#email')
    let senha = document.querySelector('#senha')

    let vlnome = nome.value
    let vlemail = email.value
    let vlsenha = senha.value

    if(vlsenha == 0 || vlemail == 0 || vlnome == 0){
        alert('Preencha todos os campos')
        if(vlnome == 0){
            nome.focus()
        }else if(vlemail == 0){
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

document.querySelector('#submit-sign').addEventListener('click', signUp)

