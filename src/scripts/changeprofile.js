function editar(event){
    event.preventDefault();

    console.log("Chamando o fetch para executar...");
    
    const apelido = document.querySelector('.formulario input[name="novoApelido"]');
    const email = document.querySelector('.formulario input[name="novoEmail"]');
    const biografia = document.querySelector('.formulario input[name="biografia"]');

    fetch("http://localhost:8080/api/v1/usuarios/atualizar", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({
            apelido: apelido.value,
            email: email.value,
            biografia: biografia.value,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Resposta do servidor:", data);
        alert("Dados atualizados com sucesso!");
        window.location.href = '../pages/profile.html';
    })
    .catch(error => {
        console.error("Erro ao atualizar:", error);
        alert("Ocorreu um erro ao atualizar os dados. Tente novamente.");
    });
}