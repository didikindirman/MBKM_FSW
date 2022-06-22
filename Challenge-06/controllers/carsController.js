const carsService = require("../services/carsService");

const create = async (req, res, next) => {
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    type,
    year,
    option,
    specs,
    availableAt,
    isWithDriver,
  } = req.body;

  const createdBy = req.users.name;
  const updatedBy = req.users.name;

  const { status, status_code, message, data } = await carsService.create({
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    type,
    year,
    option,
    specs,
    availableAt,
    isWithDriver,
    createdBy,
    updatedBy,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAll = async (req, res) => {
  const { status, status_code, message, data } = await carsService.getAll();

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    type,
    year,
    option,
    specs,
    availableAt,
    isWithDriver,
  } = req.body;

  const updatedBy = req.users.name;

  const { status, status_code, message, data } = await carsService.update({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    type,
    year,
    option,
    specs,
    availableAt,
    isWithDriver,
    updatedBy,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const deleteCar = async (req, res) => {
  const { id } = req.params;

  const deletedBy = req.users.name;

  const { status, code_status, message, data } = await carsService.delete({
    id,
    deletedBy,
  });

  res.status(code_status).send({
    status: status,
    message: message,
    data: data,
  });
};

const filtered = async (req, res) => {
  const { availableAt, isWithDriver } = req.query;

  const { status, code_status, message, data } = await carsService.filtered({
    availableAt,
    isWithDriver,
  });

  res.status(code_status).send({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = { create, getAll, update, deleteCar, filtered };
