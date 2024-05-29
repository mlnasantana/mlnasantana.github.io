document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Obrigado pelo contato, ${name}! Recebemos sua mensagem e entraremos em contato em breve.`);
    
    // Limpa o formulário
    document.getElementById('contactForm').reset();
});
