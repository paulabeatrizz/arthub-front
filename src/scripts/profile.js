function updateProfile() {
    const input = document.getElementById("profileInput");
    const profileImg = document.getElementById("profileImg");

    const file = input.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        profileImg.src = reader.result;
    } 

    if (file) {
        reader.readAsDataURL(file);
    }
}

function updateBanner() {
    const input = document.getElementById("bannerInput");
    const bannerImg = document.querySelector(".banner-conteudo img");

    const file = input.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        bannerImg.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); 
    }
}

function mostrarDados(event){
    event.preventDefault();

    const token = localStorage.getItem("authToken");

    if (!token) {
        alert("Usuário não está logado.");
        return;
    }

    fetch("http://localhost:8080/api/v1/usuarios/dados", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar informações do usuário.");
            }
            return response.json();
        })
        .then(user => {
            document.getElementById("nome").textContent = user.nome;
            document.getElementById("apelido").textContent = "@" + user.apelido;
            document.getElementById("texto").textContent = user.biografia;
        })
        .catch(error => {
            console.error("Erro ao carregar os dados do usuário:", error);
        });
} 

document.addEventListener("DOMContentLoaded", mostrarDados);