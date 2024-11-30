// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
  // Manipular o envio do formulário
  const form = document.getElementById('preRegistrationForm');
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Coletar os dados do formulário
    const formData = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      idade: document.getElementById('idade').value,
      elo: document.getElementById('elo').value,
    };
  
    try {
      // Enviar os dados para a função Serverless
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        successModal.show(); // Exibe o modal de sucesso
        form.reset(); // Limpa o formulário
      } else {
        alert('Erro ao enviar o pré-cadastro. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar o pré-cadastro. Tente novamente mais tarde.');
    }
  });
  