import mongoose, { Schema } from "mongoose";

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    enum: ["veg", "non-veg", "dessert"],
  },
  img: {
    type: String,
  },
  avgRating: {
    type: Number,
    default: 0,
  },
});
const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    menu: [menuItemSchema],
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    orderAvail: {
      type: Boolean,
      default: true,
    },
    likesCount: {
      type: Number,
      default: 0,
    },
    avgRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
