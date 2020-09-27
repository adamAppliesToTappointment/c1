export default function(req, res, next) {
  res.header('Access-Control-Allow-Origin', `${process.env.CORS_ORIGIN}`);
  res.header('Access-Control-Allow-Methods', 'PUT, GET');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization'
  );
  next();
}
