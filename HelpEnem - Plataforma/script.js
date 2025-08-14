document.getElementById('LoginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('Email').value;
  const password = document.getElementById('Senha').value;
  const loadingScreen = document.getElementById('LoadingScreen');

  // Verifica se as credenciais são válidas
  if (email === 'estudantes2025@helpenem.com' && password === '123456') {
    // Mostra o loading screen
    loadingScreen.style.display = 'flex';

    // Simula carregamento e redireciona
    setTimeout(() => {
      window.location.href = "Páginas/Dashboard/Dashboard.html";
    }, 2000);
  } else {
    alert('E-mail ou senha incorretos.');
  }
});