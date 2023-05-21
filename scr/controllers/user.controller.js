const userService = require("../services/user.service")

const create = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password || !avatar) {
    res
      .status(400)
      .send({ messagem: "Preencha todos os campos para fazer o cadastro" });
  }

  const user = await userService.create(req.body);

  if(!user) {
    return res.status(400).send({menssagem: "Erro ao criar o usuário"})
  }

  res.status(201).send({
    message: "Usuário criado com sucesso",
    user: {
      id: user._id,
      name,
      username,
      email,
      // password,
      avatar,
    },
    
  });
};

module.exports = { create };
