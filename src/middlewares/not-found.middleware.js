const notFoundMiddleware = (req,res) => {
  res.status(404).json({message: 'Resource not found'})
}

export default notFoundMiddleware