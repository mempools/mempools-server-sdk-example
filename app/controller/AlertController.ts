import { Request, Response } from "express";
import { mempools } from "mempools-server-sdk";

interface CreateMonitorAlertProps {
  userId: string;
  addressToMonitor: string;
  chainId: string;
}

interface SmartContractEvent {
  eventName: string;
  eventValue: string;
}

interface CreateScAlertProps {
  userId: string;
  contractAddress: string;
  eventName: string;
  smartContractEvents?: SmartContractEvent[];
  chainId: string;
}

class AlertController {
  public async createMonitorAlert(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      let { userId, addressToMonitor, chainId } = req.body;
      console.log("user id", userId);
      console.log(addressToMonitor, chainId);
      let createAlertProps: CreateMonitorAlertProps = {
        userId,
        addressToMonitor,
        chainId,
      };

      let alert = await mempools.cosmosMonitorFundsAlert(createAlertProps);

      return res.status(200).json(alert);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID", error: err });
    }
  }

  public async createSmartContractAlert(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      let { userId, contractAddress, eventName, smartContractEvents, chainId } =
        req.body;
      let createAlertProps: CreateScAlertProps = {
        userId,
        contractAddress,
        eventName,
        smartContractEvents,
        chainId,
      };
      let alert = await mempools.cosmosMonitorSmartContractAlert(
        createAlertProps
      );
      return res.status(200).json(alert);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID", error: err });
    }
  }

  public async disableAlert(req: Request, res: Response): Promise<Response> {
    try {
      let { alertId } = req.body;
      let alert = await mempools.disableAlert(alertId);
      return res.status(200).json(alert);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID", error: err });
    }
  }

  public async enableAlert(req: Request, res: Response): Promise<Response> {
    try {
      let { alertId } = req.body;
      let alert = await mempools.enableAlert(alertId);
      return res.status(200).json(alert);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID", error: err });
    }
  }

  public async getAlert(req: Request, res: Response): Promise<Response> {
    try {
      let { clientId, chainId, page } = req.body;
      let alert = await mempools.getAlerts({ clientId, chainId, page });
      return res.status(200).json(alert);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID", error: err });
    }
  }

  public async getAlertById(req: Request, res: Response): Promise<Response> {
    try {
      let { alertId } = req.body;
      let alert = await mempools.getAlertById({ alertId });
      return res.status(200).json(alert);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID", error: err });
    }
  }

  public async deleteAlert(req: Request, res: Response): Promise<Response> {
    try {
      let { alertId } = req.body;
      let alert = await mempools.deleteAlert(alertId);
      return res.status(200).json(alert);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID", error: err });
    }
  }
}
export const alertController = new AlertController();
