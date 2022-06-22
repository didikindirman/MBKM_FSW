const carsRepository = require("../repositories/carsRepository");

class CarsService {
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
    try {
      if (!plate) {
        return {
          status: false,
          status_code: 400,
          message: "Plate is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!manufacture) {
        return {
          status: false,
          status_code: 400,
          message: "Manufacture is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!model) {
        return {
          status: false,
          status_code: 400,
          message: "Model is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!image) {
        return {
          status: false,
          status_code: 400,
          message: "Image is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!rentPerDay) {
        return {
          status: false,
          status_code: 400,
          message: "How many days rent is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!capacity) {
        return {
          status: false,
          status_code: 400,
          message: "Capacity is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!description) {
        return {
          status: false,
          status_code: 400,
          message: "Description is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!transmission) {
        return {
          status: false,
          status_code: 400,
          message: "Tranmission is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!type) {
        return {
          status: false,
          status_code: 400,
          message: "Type is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!year) {
        return {
          status: false,
          status_code: 400,
          message: "Year is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!option) {
        return {
          status: false,
          status_code: 400,
          message: "Option is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!specs) {
        return {
          status: false,
          status_code: 400,
          message: "Specs is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!availableAt) {
        return {
          status: false,
          status_code: 400,
          message: "Car available at is required",
          data: {
            registered_car: null,
          },
        };
      }

      if (!isWithDriver === null) {
        return {
          status: false,
          status_code: 400,
          message: "Driver is required",
          data: {
            registered_car: null,
          },
        };
      }

      const createdCar = await carsRepository.create({
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

      return {
        status: true,
        status_code: 201,
        message: "Car created successfully",
        data: {
          created_car: createdCar,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          create_Car: null,
        },
      };
    }
  }

  static async getAll() {
    try {
      const getAll = await carsRepository.getAll();

      return {
        status: true,
        status_code: 200,
        message: "Cars successfully loaded",
        data: {
          Loaded_car: getAll,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          Loaded_Car: null,
        },
      };
    }
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
    try {
      if (!plate) {
        return {
          status: false,
          status_code: 400,
          message: "Plate is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!manufacture) {
        return {
          status: false,
          status_code: 400,
          message: "Manufacture is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!model) {
        return {
          status: false,
          status_code: 400,
          message: "Model is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!image) {
        return {
          status: false,
          status_code: 400,
          message: "Image is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!rentPerDay) {
        return {
          status: false,
          status_code: 400,
          message: "How many days rent is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!capacity) {
        return {
          status: false,
          status_code: 400,
          message: "Capacity is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!description) {
        return {
          status: false,
          status_code: 400,
          message: "Description is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!transmission) {
        return {
          status: false,
          status_code: 400,
          message: "Tranmission is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!type) {
        return {
          status: false,
          status_code: 400,
          message: "Type is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!year) {
        return {
          status: false,
          status_code: 400,
          message: "Year is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!option) {
        return {
          status: false,
          status_code: 400,
          message: "Option is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!specs) {
        return {
          status: false,
          status_code: 400,
          message: "Specs is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!availableAt) {
        return {
          status: false,
          status_code: 400,
          message: "Car available at is required",
          data: {
            updated_car: null,
          },
        };
      }

      if (!isWithDriver === null) {
        return {
          status: false,
          status_code: 400,
          message: "Driver is required",
          data: {
            updated_car: null,
          },
        };
      }

      const updatedCar = await carsRepository.update({
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

      return {
        status: true,
        status_code: 201,
        message: "Car updated successfully",
        data: {
          updated_car: updatedCar,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          create_Car: null,
        },
      };
    }
  }

  static async delete({ id, deletedBy }) {
    try {
      const deletedCar = await carsRepository.delete({
        id,
        deletedBy,
      });

      return {
        status: true,
        code_status: 200,
        message: "Car successfully deleted",
        data: {
          Deleted_cars: deletedCar,
        },
      };
    } catch (err) {
      return {
        status: false,
        code_status: 500,
        message: err.message,
        data: {
          registered_Users: null,
        },
      };
    }
  }

  static async filtered({ availableAt, isWithDriver }) {
    try {
      const getAllCars = await carsRepository.getAllCars({
        availableAt,
        isWithDriver,
      });

      return {
        status: true,
        code_status: 200,
        message: "Car successfully filter",
        data: {
          Cars: getAllCars,
        },
      };
    } catch (err) {
      return {
        status: false,
        code_status: 500,
        message: err.message,
        data: {
          Filter_car: null,
        },
      };
    }
  }
}

module.exports = CarsService;
