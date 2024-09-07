const routes = require("express").Router();

// localhost:8080/api/city



routes.use("/api/city", require("../controllers/CityController"));

routes.use("/api/demo", require("../controllers/DemoController"));
routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/userauth", require("../controllers/UserAuthController"));
routes.use("/api/adminauth" , require("../controllers/AdminAuthController"));
routes.use("/api/destination", require("../controllers/DestinationController"));
routes.use("/api/hotels" , require("../controllers/HotelsController"))

module.exports = routes;