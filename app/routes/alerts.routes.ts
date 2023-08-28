import { Router } from "express";

import { alertController } from "@controller/AlertController";

const alertsRoutes = Router();

// ------------ GET REQUESTS
alertsRoutes.post("/api/get-alerts", alertController.getAlert);
alertsRoutes.post("/api/get-alert-by-id", alertController.getAlertById);

// // ------------ POST REQUESTS
alertsRoutes.post("/api/create-monitor", alertController.createMonitorAlert);
alertsRoutes.post("/api/create-sc", alertController.createSmartContractAlert);
alertsRoutes.post("/api/disable-alert", alertController.disableAlert);
alertsRoutes.post("/api/enable-alert", alertController.enableAlert);
alertsRoutes.post("/api/delete", alertController.deleteAlert);

export default alertsRoutes;
