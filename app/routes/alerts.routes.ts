import { Router } from "express";

import { alertController } from "@controller/AlertController";

const alertsRoutes = Router();

// ------------ GET REQUESTS
alertsRoutes.get("/api/:id", alertController.getAlert);

// ------------ POST REQUESTS
alertsRoutes.post("/api/create-monitor", alertController.createMonitorAlert);
alertsRoutes.post("/api/create-sc", alertController.createSmartContractAlert);
alertsRoutes.post("/api/disable:id", alertController.disableAlert);
alertsRoutes.post("/api/enable:id", alertController.enableAlert);

export default alertsRoutes;
