const { cars } = require("../models");

class CarsRepository {
  static async create({
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
  }) {
    const createdCar = cars.create({
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

    return createdCar;
  }

  static async getAll() {
    const getAll = await cars.findAll();

    return getAll;
  }

  static async update({
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
  }) {
    const updatedCar = cars.update(
      {
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
      },
      { where: { id } }
    );

    return updatedCar;
  }

  static async delete({ id }) {
    const deletedCar = await cars.destroy({
      where: {
        id,
      },
    });

    return deletedCar;
  }

  static async getAllCars({ availableAt, isWithDriver }) {
    if (isWithDriver && availableAt) {
      const filteredCars = await cars.findAll({
        where: {
          isWithDriver,
          availableAt,
        },
      });

      return filteredCars;
    }

    return cars;
  }
}

module.exports = CarsRepository;
