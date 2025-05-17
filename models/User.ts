import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    enum: ['tourist', 'tour-guide', 'admin'],
    default: 'tourist'
  },
  phone: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  guideApplication: {
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    applicationTitle: String,
    motivation: String,
    cvLink: String,
    appliedAt: Date
  },
  bookings: [{
    type: Schema.Types.ObjectId,
    ref: 'Booking'
  }],
  stories: [{
    type: Schema.Types.ObjectId,
    ref: 'Story'
  }],
  assignedTours: [{
    type: Schema.Types.ObjectId,
    ref: 'Booking'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const User = models.User || model("User", userSchema);

export default User