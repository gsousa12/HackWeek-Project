const create = (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password || !avatar) {
    res
      .status(400)
      .send({ messagem: "Preencha todos os campos para fazer o cadastro" });
  }

  res.status(201).send({
    message: "Usuário criado com sucesso",
    user: {
      name,
      username,
      email,
      // password,
      avatar,
    },
    
  });
};

module.exports = { create };
