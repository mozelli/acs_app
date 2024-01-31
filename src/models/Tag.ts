import mongoose, { Schema } from 'mongoose';
import { Tag } from '../entities/Tag';


const tagSchema = new Schema<Tag>({
    name: {
        type: String,
        required: true
    },
},
{
    collection: 'tags'
});

const TagModel = mongoose.model<Tag>('Tag', tagSchema);

export default TagModel;

