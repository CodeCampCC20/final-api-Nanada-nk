// const errorMiddleware = (err, req, res, next) => {
//   const {statusCode = 500, message = "server error", field} = err
//   res.status(statusCode).json({success: false, message, ...err(field && {field})})
// }

// export default errorMiddleware

const errorMiddleware = (err, req, res, next) => {
  const { statusCode = 500, message = "server error", field } = err;
  const errorResponse = { success: false, message };
  if (field) errorResponse.field = field;
  res.status(statusCode).json(errorResponse);
};

export default errorMiddleware;
