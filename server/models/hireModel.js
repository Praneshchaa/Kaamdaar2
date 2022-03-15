import mongoose from 'mongoose'

const hireSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    hireWorkers: [
      {
        name: {
          type: String,
          required: true,
        },

        image: {
          type: String,
          required: true,
        },

        rate: {
          type: Number,
          required: true,
        },

        worker: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Worker',
        },
      },
    ],

    hireAddress: {
      address: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },

      area: {
        type: String,
        required: true,
      },
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },

    taxRate: {
      type: Number,
      required: true,
      default: 0.0,
    },

    shippingRate: {
      type: Number,
      required: true,
      default: 0.0,
    },

    totalRate: {
      type: Number,
      required: true,
      default: 0.0,
    },

    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },

    paidAt: {
      type: Date,
    },

    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },

    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Hire = mongoose.model('Hire', hireSchema)

export default Hire
