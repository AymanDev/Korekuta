import mongoose, { Schema } from "mongoose";


const SocialMediaScheme = new Schema({
  name: String,
  nickname: String,
});

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  platforms: [String],
  languages: [String],
  regions: [String],
  socials: [SocialMediaScheme],
});

const User = mongoose.model("user", userSchema);
export default User;
