function editarPerfil(event){
    event.preventDefault();

    const Iemail = document.querySelector('.email');
    const Iapelido = document.querySelector('.novoApelido');
    const Ibiografia = document.querySelector('.biografia');

    console.log("Apelido:", Iapelido.value);
    console.log("Biografia:", Ibiografia.value);

    fetch("http://localhost:8080/api/v1/usuarios/atualizar", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`, 
        },
        method: "PUT",
        body: JSON.stringify({
            email: Iemail.value,
            apelido: Iapelido.value,
            biografia: Ibiografia.value,
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
        console.log("Dados atualizados com sucesso:", data);
        alert("Dados atualizados com sucesso!");
    })
    .catch((err) => {
        console.error("Erro ao redefinir dados:", err);
        alert("Erro ao redefinir dados.");
    });
}