module.exports = (request, response) => {

    console.log("Query :",request.query)
    console.log("\n----------------------------------------------\n");
    console.log("Body :",request.body)
    console.log("\n----------------------------------------------\n");

    console.log("Params :",request.params)
    console.log("\n----------------------------------------------\n");
    
    
    const queryRequest = request.query;
    const {id}=queryRequest
    if (id === "1") {
        return response.status(200).send({
            id:id,
             fullName:"Lê Phú Sang"
        });
    }
    
    return response.status(200).send({});
  }