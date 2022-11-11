const errorHandler = (err, _req, res, _next) => {
  console.log(err.message);
  res.status(500).send(err.message);
};

export default errorHandler;