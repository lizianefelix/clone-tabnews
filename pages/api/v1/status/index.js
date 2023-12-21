function status(request, response) {
  response.status(200).json({
    chave: "será q é a pessoa certa?",
  });
}

export default status;
