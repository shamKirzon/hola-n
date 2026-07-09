import cors from "cors";
import express from "express";
import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";
import customerRoute from "./customer/customer.routes";

const rateLimiter: RateLimitRequestHandler = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: { message: "Too many request from this IP, please try again later" },
  standardHeaders: true,
  legacyHeaders: true,
});

export const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/customer", customerRoute);
