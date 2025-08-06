import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    likedRes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
      },
    ],
    avatar: {
      type: String,
    },
    hostel: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model("User", userSchema);
