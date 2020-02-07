const express = require("express");
const facilityRouter = express.Router();
const facilityController = require("../controllers/ficilityController");
const authConstrollers = require("../controllers/authController");

facilityRouter
  .route("/")
  .get(facilityController.getFacilities)
  .post(facilityController.createFacility)
  .delete(
    authConstrollers.authenticate,
    authConstrollers.Permistions("admin"),
    facilityController.deleteaAll
  );
// authConstrollers.authenticate,authConstrollers.Permistions("admin"),
facilityRouter
  .route("/:id")
  .get(facilityController.findFacility)
  .delete(
    authConstrollers.authenticate,
    authConstrollers.Permistions("admin"),
    facilityController.deleteFacility
  )
  .patch(
    authConstrollers.authenticate,
    authConstrollers.Permistions("admin"),
    facilityController.updateFacility
  );

module.exports = facilityRouter;
