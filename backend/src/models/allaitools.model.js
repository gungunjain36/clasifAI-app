import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const allaitools = new Schema({
  AI_Tool_Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  Free_Paid_Other: {
    type: String,
    enum: ['Free', 'Paid', 'Freemium', 'Other'], // Define the possible values
  },
  Useable_For: {
    type: String,
  },
  Charges: {
    type: String,
  },
  Review: {
    type: String,
  },
  Tool_Link: {
    type: String,
  },
  Major_Category: {
    type: String,
  },
}, { timestamps: true });

allaitools.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('AllAITools', allaitools);
