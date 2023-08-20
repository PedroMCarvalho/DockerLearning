import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 8000;

app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Rota de cadastro
app.post('/accounts/', (req: Request, res: Response) => {
  // Validar dados usando regex
  const emailRegex = /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim;
  const passwordRegex = /^\w{1,}$/gim;
  const nameRegex = /^[a-z]{1,}$/gim;

  const { email, name, password } = req.body;

  if (!emailRegex.test(email) || !passwordRegex.test(password) || !nameRegex.test(name)) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  return res.status(201).json({ id: 'user_id', email, name });
});

// Rota de login
app.post('/accounts/login', (req: Request, res: Response) => {

  return res.status(200).json({ id: 'user_id' });
});

// Rota de atualização
app.patch('/accounts/', (req: Request, res: Response) => {

  return res.status(200).json({ id: 'user_id', ...req.body });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
