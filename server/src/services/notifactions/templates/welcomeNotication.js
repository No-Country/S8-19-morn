const welcomeEmail = (name, email) => {
    return `
      <h1>Bienvenido, ${name}!</h1>
      <p>Gracias por registrarte en nuestro sitio. Nos complace darte la bienvenida a nuestra comunidad.</p>
      <p>Tu dirección de correo electrónico registrada es: ${email}</p>
      <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.</p>
      <p>¡Esperamos que disfrutes tu experiencia en nuestro sitio!</p>
      <p>Saludos cordiales,</p>
      
    `;
  };

  module.exports = welcomeEmail