import { Schema, model, models } from 'mongoose';

const packageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    enum: ['Beach', 'Adventure', 'Cultural', 'Mountain', 'City', 'Heritage'],
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviews: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true
  },
  highlights: [{
    type: String,
    required: true
  }],
  included: [{
    item: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    }
  }],
  notIncluded: [{
    type: String,
    required: true
  }],
  itinerary: [{
    day: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    activities: [{
      type: String,
      required: true
    }]
  }],
  additionalInfo: {
    groupSize: {
      type: String,
      required: true
    },
    ageRequirement: {
      type: String,
      required: true
    },
    physicalRating: {
      type: String,
      enum: ['Easy', 'Moderate', 'Difficult'],
      required: true
    },
    bestSeason: {
      type: String,
      required: true
    },
    pickupService: {
      type: String,
      required: true
    }
  },
  termsConditions: [{
    type: String,
    required: true
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    // ref: 'User',
    required: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, { 
  timestamps: true 
});

const Package = models.Package || model("Package", packageSchema);

export default Package;