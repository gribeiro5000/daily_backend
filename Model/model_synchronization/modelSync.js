import User from "../Models/user.js";
import Note from "../Models/note.js";
import Jwt_blacklist from "../Models/jwt_blacklist.js";

function modelSync() {
    User.sync()
    Note.sync()
    Jwt_blacklist.sync()
}

export default modelSync