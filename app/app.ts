require("dotenv").config({
  path: "./.env",
});

import express from "express";
import "./config";
import alertsRoutes from "@routes/alerts.routes";

global.XMLHttpRequest = require("xhr2");

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
  }

  private routes(): void {
    this.app.use(alertsRoutes);

    this.app.get("/healthz", (req, res) => {
      res.json({ mempoolsApi: true });
    });
  }
}

export default new App().app;
