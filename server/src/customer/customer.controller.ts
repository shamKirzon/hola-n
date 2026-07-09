import { Request, Response } from "express";
import { customerService } from "./customer.service";

class CustomerController {
  async login() {}

  getCustomerCountsByPeriod = async (req: Request, res: Response) => {
    const period = Number(req.params.period);

    const result = await customerService.getCustomerCountsByPeriod(period);

    res.status(200).json({ result });
  };
}

export const customerController = new CustomerController();
