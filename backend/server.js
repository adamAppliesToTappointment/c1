const app = require('./app');

app.listen(process.env.API_EXPRESS_PORT, () => {
  console.log(
    `Server listening on port: ${process.env.API_EXPRESS_PORT}`
  );
});
