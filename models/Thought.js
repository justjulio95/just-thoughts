const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true,
      min: 1,
      max: 280
    },
    writtenBy: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  }
)

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      trim: true,
      min: 1,
      max: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    writtenBy: {
      type: String,
      required: true,
      trim: true
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
)

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought