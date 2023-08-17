import { Request, Response } from "express";
import { mempools } from "mempools-sdk";

interface CreateMonitorAlertProps {
  userId: string;
  addressToMonitor: string;
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
}

class AlertController {
  public async createMonitorAlert(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      let { userId, addressToMonitor } = req.body;
      let createAlertProps: CreateMonitorAlertProps = {
        userId,
        addressToMonitor,
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
      let { userId, contractAddress, eventName, smartContractEvents } =
        req.body;
      let createAlertProps: CreateScAlertProps = {
        userId,
        contractAddress,
        eventName,
        smartContractEvents,
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
      let { id } = req.params;
      let alert = await mempools.disableAlert(id);
      return res.status(200).json(alert);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID", error: err });
    }
  }

  public async enableAlert(req: Request, res: Response): Promise<Response> {
    try {
      let { id } = req.params;
      let alert = await mempools.enableAlert(id);
      return res.status(200).json(alert);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID", error: err });
    }
  }

  public async getAlert(req: Request, res: Response): Promise<Response> {
    try {
      let { id } = req.params;
      let alert = await mempools.getAlerts(id);
      return res.status(200).json(alert);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID", error: err });
    }
  }
}

export const alertController = new AlertController();
