// Landing Page Controller
exports.getLanding = (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          h3, body { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }
          body { display: flex; flex-direction: column; align-items: center; justify-content: center; }
        </style>
      </head>
      <body>
        <h3>Congrats We Are Live!</h3>
        View the API documentation
        <a href="/api/api-docs">HERE</a>
      </body>
    </html>
  `);
};
