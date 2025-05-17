// models/Review.js
import { Schema, model, models } from 'mongoose';

const reviewSchema = new Schema({
    package: {
        type: Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Review = models.Review || model('Review', reviewSchema);

export default Review