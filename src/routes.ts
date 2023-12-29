import express, {Request, Response} from 'express';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({Hello: "World!"});
});

export { routes };