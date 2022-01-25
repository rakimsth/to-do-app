const mongoose = require('mongoose');

const Schema = mongoose.Schema(
  {
    title: { type: String, required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  },
  {
    collection: 'todos',
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    toObject: {
      virtuals: true,
    },
    toJson: {
      virtuals: true,
    },
  },
);

module.exports = mongoose.model('Todos', Schema);
