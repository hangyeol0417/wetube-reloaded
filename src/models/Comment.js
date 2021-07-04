import mongoose from "mongoose";
import Video from "./Video";

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    video: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Video" },
    createdAt: { type: Date, required: true, default: Date.now },
});

commentSchema.pre('findOneAndDelete', async function() {
    //console.log(this.schema.tree)
    //const a = await Video
    //Video.findOneAndDelete({ "comments": "60e1bc124c81c64ddc55da66" }, )
});


const Comment = mongoose.model("Comment", commentSchema);

export default Comment;