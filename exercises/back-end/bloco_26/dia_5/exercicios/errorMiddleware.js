module.exports = (err, _req, res, _next) => {
  if (err.code && err.status) {
    return res.status(err.status).json({ message: err.message, code: err.code });
  }

  return res.status(404).json({ "message": "Opsss, route not found!" });
}