import { Request, Response } from 'express';

export const HomeClient = (req: Request, res: Response) => {
  res.send('Informe o numero do seu Admin!')
}
export const Login = (req: Request, res: Response) => {
  res.send('Faca seu login!')
}
export const SignUp = (req: Request, res: Response) => {
  res.send('Faca seu Cadastro!')
}
export const PageClient = (req: Request, res: Response) => {
  res.send('Entrou como usuario cliente') 
}