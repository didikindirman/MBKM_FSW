const authService = require("../services/authService");

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const { status, status_code, message, data } = await authService.register({
    name,
    email,
    password,
    role,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const currentUser = async (req, res) => {
  const currentUser = req.users;

  res.status(200).send({
    status: true,
    message: "This is the logged user",
    data: {
      user: currentUser,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, status_code, message, data } = await authService.login({
    email,
    password,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = { register, login, currentUser };
