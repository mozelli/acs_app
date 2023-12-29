import { Request, Response } from 'express';
import PostModel, { IPost } from '../models/Post';
import CommentModel, { IComment } from '../models/Comments';

export default class PostController {
    async createPost(request: Request, response: Response) {
        const post = new PostModel({
            title: "Título",
            content: "Conteúdo",
            author: "João Mozelli Neto",
            image: "url da imagem",
            createdAt: Date.now(),
        });
        
        post.save()
        .then((result) => {
            return response.status(201).json(result);
        })
        .catch((error) => {
            return response.status(500).json(error);
        })
    }
}