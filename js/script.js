document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageElement = document.getElementById('message');
  
    // Limpiar el mensaje anterior
    messageElement.textContent = '';
  
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      messageElement.textContent = 'Las contraseñas no coinciden';
      return;
    }
  
    // Mostrar mensaje de éxito
    messageElement.style.color = 'green';
    messageElement.textContent = 'Formulario enviado correctamente';
  
    // Aquí podrías enviar los datos del formulario a un servidor si fuera necesario
    console.log({
      name,
      email,
      password
    });
  });
  