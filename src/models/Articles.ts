import mongoose, { Schema } from 'mongoose';
import { Article } from '../entities/Article';

const articleSchema = new Schema<Article>({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    imageUrl: {
        type: [String],
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    tag_id: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Tag'
    }],
    author_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
    cretedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
},
{
    collection: 'articles'
});

const ArticleModel = mongoose.model<Article>('Post', articleSchema);

export default ArticleModel;

