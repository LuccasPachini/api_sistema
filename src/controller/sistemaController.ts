import { Request, Response } from 'express';

let saldo = 0;

export const consultarSaldo = (req: Request, res: Response) => {
  res.json({ saldo });
};

export const realizarDeposito = (req: Request, res: Response) => {
  const { valor } = req.body;
  saldo += valor;
  res.json({ saldo });
};

export const realizarSaque = (req: Request, res: Response) => {
  const { valor } = req.body;
  if (saldo >= valor) {
    saldo -= valor;
    res.json({ saldo });
  } else {
    res.status(400).json({ mensagem: "Saldo insuficiente" });
  }
};
