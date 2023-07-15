import User from "../Models/user.js";
import Note from "../Models/note.js";

function modelSync() {
    User.sync()
    Note.sync()
}

export default modelSync