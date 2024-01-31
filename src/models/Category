import mongoose, { Schema } from 'mongoose';
import { Category } from '../entities/Category';


const categorySchema = new Schema<Category>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
},
{
    collection: 'categories'
});

const CategoryModel = mongoose.model<Category>('Tag', categorySchema);

export default CategoryModel;

