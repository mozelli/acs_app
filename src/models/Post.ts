import mongoose, { Document, Schema } from 'mongoose';
import { IComment } from './Comments';

export interface IPost extends Document {
    title: string;
    content: string;
    author: string;
    image: string;
    createdAt: Date;
    comments: IComment[];
}

const postSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Comment'
    }]
},
{
    collection: 'posts'
});

const PostModel = mongoose.model<IPost>('Post', postSchema);

export default PostModel;

