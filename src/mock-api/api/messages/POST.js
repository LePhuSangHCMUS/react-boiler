module.exports = (request, response) => {
  const userId = request.body.id;
  if (userId === 1) {
      return response.status(409).send({});
  }
  
  return response.status(201).send({
      "id": request.body.id,
      "userName": request.body.userName,
      "age": request.body.age
  });
}