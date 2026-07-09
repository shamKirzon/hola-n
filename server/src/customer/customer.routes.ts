import { Router } from "express";
import { customerController } from "./customer.controller";

const customerRoute = Router();

customerRoute.post("/login", customerController.login);

customerRoute.get(
  "/get-customer-counts-by-period/:period",
  customerController.getCustomerCountsByPeriod,
);

export default customerRoute;
