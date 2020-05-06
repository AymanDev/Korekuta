import mongoose, { Schema } from "mongoose";

const SocialMediaScheme = {
  name: String,
  nickname: String
};

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  platforms: [String],
  languages: [String],
  regions: [String],
  socials: [SocialMediaScheme]
});

export const User = mongoose.model("user", userSchema);

const LangSchema = {
  lang: String,
  text: String
};

const CommentSchema = {
  id: Schema.Types.ObjectId,
  text: String,
  rating: {
    positive: Number,
    negative: Number
  }
};

const gameSchema = new Schema({
  titles: [LangSchema],
  platforms: [LangSchema],
  descriptions: [LangSchema],
  comments: [CommentSchema]
});

export const Game = mongoose.model("game", gameSchema);
