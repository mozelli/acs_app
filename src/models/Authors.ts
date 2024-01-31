import mongoose, { Schema } from 'mongoose';
import { Author } from '../entities/Author';


const authorSchema = new Schema<Author>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
{
    collection: 'authors'
});

const AuthorModel = mongoose.model<Author>('Tag', authorSchema);

export default AuthorModel;

