import mongoose, { Schema } from "mongoose";


const commentSchema = new Schema({
  id: Schema.Types.ObjectId,
  text: String,
  rating: {
    positive: Number,
    negative: Number,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
