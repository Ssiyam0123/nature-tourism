// models/Notification.js
import { Schema, model, models } from 'mongoose';

const notificationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['booking', 'application', 'system', 'promotion'],
        required: true
    },
    relatedEntity: {
        type: Schema.Types.ObjectId,
        refPath: 'onModel'
    },
    onModel: {
        type: String,
        enum: ['Booking', 'User', 'Package']
    },
    isRead: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Notification = models.Notification || model('Notification', notificationSchema);

export default Notification