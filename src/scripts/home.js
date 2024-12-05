function mudarCor(botao, tipo) {
    const botoes = document.querySelectorAll('.tag');

    botoes.forEach((btn) => {
        btn.classList.remove('ativo');
        const checkIcon = btn.querySelector('i');
        if (checkIcon) {
          checkIcon.style.display = 'none';
        }
      });
    
    botao.classList.add('ativo');

    const checkIcon = botao.querySelector('i');
    if (checkIcon) {
      checkIcon.style.display = 'inline'; 
  }
}