exports.render = (users) => {
    let listItems = users.map(user => `<li>${user}</li>`).join('');
    return `
      <html>
        <head><title>Usuarios</title></head>
        <body>
          <h1>Lista de usuarios:</h1>
          <ul>${listItems}</ul>
        </body>
      </html>
    `;
  };
  