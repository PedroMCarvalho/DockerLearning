"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
});
// Rota de cadastro
app.post('/accounts/', (req, res) => {
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
app.post('/accounts/login', (req, res) => {
    return res.status(200).json({ id: 'user_id' });
});
// Rota de atualização
app.patch('/accounts/', (req, res) => {
    return res.status(200).json(Object.assign({ id: 'user_id' }, req.body));
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
