    import { Router } from 'express';
    import { consultarSaldo, realizarDeposito, realizarSaque } from '../controller/sistemaController'; 

    const router = Router();

    router.get('/saldo', consultarSaldo);
    router.post('/depositar', realizarDeposito);
    router.post('/saque', realizarSaque);

    export default router;  