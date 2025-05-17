// models/Booking.js
import { Schema, model, models } from 'mongoose';

const bookingSchema = new Schema({
    package: {
        type: Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    },
    tourist: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tourGuide: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    numberOfPeople: {
        type: Number,
        default: 1
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in-review', 'accepted', 'rejected', 'completed', 'cancelled'],
        default: 'pending'
    },
    payment: {
        status: {
            type: String,
            enum: ['pending', 'completed', 'failed', 'refunded'],
            default: 'pending'
        },
        amount: Number,
        transactionId: String,
        paymentDate: Date,
        method: String
    },
    specialRequests: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Booking = models.Booking || model('Booking', bookingSchema);
export default Booking