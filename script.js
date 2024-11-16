//Constantes usadas na mudança de registro para login
const container = document.querySelector(".container")
const registerBtn = document.querySelector(".register-btn")
const loginBtn = document.querySelector(".login-btn")
const criarcontaBtn = document.querySelector(".criarconta")

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})


function cadastrar(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão
    
    console.log("Chamando o fetch para cadastrar...");
    
    const Inome = document.querySelector('.form-box.register input[name="nome"]');
    const Iemail = document.querySelector('.form-box.register input[name="email"]');
    const Idata = document.querySelector('.form-box.register input[name="dataNascimento"]');
    const Isenha = document.querySelector('.form-box.register input[name="senha"]');

    console.log("Campos do formulário:");
    console.log("Nome:", Inome?.value || "Não encontrado");
    console.log("Email:", Iemail?.value || "Não encontrado");
    console.log("Data de Nascimento:", Idata?.value || "Não encontrado");
    console.log("Senha:", Isenha?.value || "Não encontrado");

    fetch("http://localhost:8080/api/v1/auth/registrar", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
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

    // Limpa os campos do formulário
    Inome.value = "";
    Iemail.value = "";
    Idata.value = "";
    Isenha.value = "";
}

criarcontaBtn.addEventListener("click", cadastrar);