import { Request, Response } from 'express';
import { admin } from '../database/config/firebaseConfig';


class UsersController {
    async addUser(request: Request, response: Response) {
        
    }

    async getUsers(request: Request, response: Response) {
        admin.firestore().collection('users')
        .get()
        .then((snapshot) => {
            const transation = snapshot.docs.map(doc => ({
                ...doc.data(),
                uuid: doc.id
            }))
            return response.status(200).json(transation)
        })
    }
}

export default UsersController