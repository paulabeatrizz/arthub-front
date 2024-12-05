const containerComentario = document.getElementById("container-comentarios");
const token = localStorage.getItem("token");
const dono = document.getElementById("arroba-dono")
dono.textContent = "@otaldoloidforger"


async function getComentarios() {
    
    try {
        const resp = await fetch("http://localhost:8080/api/v1/comentarios/2", {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });

        console.log(resp);

        if (!resp.ok) {
            console.error(`Erro na requisição: ${resp.status} - ${resp.statusText}`);
            return;
        }

        const data = await resp.json();
        console.log(data);

     
        containerComentario.innerHTML = "";

   
        data.forEach(comentario => {
            const li = document.createElement("li");
            li.classList.add("comentario-item");

        
            li.innerHTML = `
                <p><strong>Conteúdo:</strong> ${comentario.conteudo || "Sem conteúdo"}</p>
                <p><strong>Data de Publicação:</strong> ${new Date(comentario.dataPublicacao).toLocaleString()}</p>
                <p><strong>Curtidas:</strong> ${comentario.curtidas}</p>
            `;

            containerComentario.appendChild(li);
        });

    } catch (error) {
        console.error("Erro ao buscar comentários:", error);
    }
}

getComentarios();
