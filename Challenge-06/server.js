const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const PORT = 8989;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// middleware
const middleware = require("./middlewares/auth");

// controller
const authController = require("./controllers/authController");
const carsController = require("./controllers/carsController");

// router
// auth
app.post("/auth/register", authController.register);
app.post(
  "/auth/regisAdmin",
  middleware.authenticate,
  middleware.isSuperAdmin,
  authController.register
);
app.post("/auth/login", authController.login);
app.get("/auth/me", middleware.authenticate, authController.currentUser);

// CRUD
app.post(
  "/cars/create",
  middleware.authenticate,
  middleware.roles,
  carsController.create
);

// get all cars
app.get(
  "/cars/show",
  middleware.authenticate,
  middleware.roles,
  carsController.getAll
);

// update cars
app.put(
  "/cars/update/:id",
  middleware.authenticate,
  middleware.roles,
  carsController.update
);

// delete cars
app.delete(
  "/cars/delete/:id",
  middleware.authenticate,
  middleware.roles,
  carsController.deleteCar
);

// filter
app.get("/cars/filter?", carsController.filtered);

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.info(`Server running at locahost:${PORT}`);
});
