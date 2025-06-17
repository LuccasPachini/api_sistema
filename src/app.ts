import express from "express";
import sistemaRoute from "./routes/sistemaRoute";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', sistemaRoute);

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});