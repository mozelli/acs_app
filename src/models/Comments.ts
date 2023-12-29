import mongoose, { Document, Model, Schema } from "mongoose";

export interface IComment extends Document {
    text: string;
    author: string;
    createdAt: Date;
}

const commentSchema = new Schema<IComment>({
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{
    collection: 'comments'
});

const CommentModel = mongoose.model<IComment>('Comment', commentSchema);

export default CommentModel;