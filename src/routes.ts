import express, {Request, Response} from 'express';
import PostController from './controllers/PostsController';

const routes = express.Router();
const postController = new PostController();

routes.get('/', (req: Request, res: Response) => {
    return res.json({Hello: "World!"});
});

routes.post('/posts', postController.createPost);

export { routes };