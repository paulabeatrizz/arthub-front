//Constantes usadas no front
const container = document.querySelector(".container")
const registerBtn = document.querySelector(".register-btn")
const loginBtn = document.querySelector(".login-btn")

//Constante dos botões
const criarcontaBtn = document.querySelector(".criarconta")
const fazerLoginBtn = document.querySelector(".fazerlogin")

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})


function cadastrar(event) {
    event.preventDefault();
    
    console.log("Chamando o fetch para cadastrar...");
    
    const Inome = document.querySelector('.form-box.register input[name="nome"]');
    const Iapelido = document.querySelector('.form-box.register input[name="apelido"]');
    const Iemail = document.querySelector('.form-box.register input[name="email"]');
    const Idata = document.querySelector('.form-box.register input[name="dataNascimento"]');
    const Isenha = document.querySelector('.form-box.register input[name="senha"]');

    fetch("http://localhost:8080/api/v1/auth/registrar", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
            apelido: Iapelido.value,
            email: Iemail.value,
            dataNascimento: Idata.value,
            senha: Isenha.value,
        }),
    })
    .then((res) => {
        console.log("Resposta recebida:", res);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Erro na requisição: " + res.status);
        }
    })
    .then((data) => {
        console.log("Usuário cadastrado com sucesso:", data);
    })
    .catch((err) => {
        console.error("Erro ao cadastrar:", err);
    });

    // Limpar os campos
    Inome.value = "";
    Iapelido.value = "";
    Iemail.value = "";
    Idata.value = "";
    Isenha.value = "";
}

function login(event){
    event.preventDefault();

    console.log("Chamando o fetch para executar login...");
    
    const Iemail = document.querySelector('.form-box.login input[name="email"]');
    const Isenha = document.querySelector('.form-box.login input[name="senha"]');

    fetch("http://localhost:8080/api/v1/auth/login", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({
            email: Iemail.value,
            senha: Isenha.value,
        }),
    })
    .then(data => {
        console.log("Login bem-sucedido:", data);
    })
    .catch(error => {
        console.error("Erro durante o login:", error);
    });

    Iemail.value = "";
    Isenha.value = "";
    
}

criarcontaBtn.addEventListener("click", cadastrar);
fazerLoginBtn.addEventListener("click", login)