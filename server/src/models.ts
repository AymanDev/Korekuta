import mongoose, { Schema } from "mongoose";



const LangSchema = new Schema({
  lang: String,
  text: String,
});

const gameSchema = new Schema({
  titles: [LangSchema],
  platforms: [LangSchema],
  descriptions: [LangSchema],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Game = mongoose.model("game", gameSchema);

export default Game;