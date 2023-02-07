import { Request, Response } from 'express';
import { sequelize } from '../../instances/pg';
import { UserAdmin } from '../../models/modelUserAdmin';
import { UserClient } from '../../models/modelUserClient';


export const Home = async (req: Request, res: Response) => {
  let users = await UserAdmin.findOne()
  res.send(users)
}
export const Login = (req: Request, res: Response) => {
  res.send('Faca seu Login como admin!')
}
export const SignUp = (req: Request, res: Response) => {
  res.send('Faca se cadastro!')
}
export const PageAdmin = (req: Request, res: Response) => {
  res.send('Entrou como usuario admin') 
}
export const ByLocation = async (req: Request, res: Response) => {
  let usersClients = await UserClient.findAll()
  console.log(usersClients)
  res.send(usersClients)
}