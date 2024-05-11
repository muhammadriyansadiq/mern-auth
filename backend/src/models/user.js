// const mongoose = require("mongoose")
const { createtokenforuser } = require("../services/authentication");
const { createHmac, randomBytes } = require("crypto"); // built in pkg of node for creating hash
const { Schema, model } = require("mongoose");

const authenticationschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});

authenticationschema.pre("save", function (next) {
  // schema mai editing ki hai user save honai sai pehlai yeh chalayega
  const user = this; // refers to object that you want to save
  if (!user.isModified("password")) return; // agar password modified nhi hoa tu return kardoo
  const salt = randomBytes(16).toString(); // salt yaha sai banadya hai random string hota hai e.g secret key
  const hashedPassword = createHmac("sha256", salt) // here is salt is a key sha256 is algorithsm
    .update(user.password)
    .digest("hex");
  this.salt = salt;
  this.password = hashedPassword; // aur password update kardya hai form submit sai pehlai
  next();
});

authenticationschema.static(
  "matchpasswordandgenaratetoken",
  async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error("user not found");
    const salt = user.salt;
    const hashedpassword = user.password;
    const userProvidedHash = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    if (hashedpassword !== userProvidedHash)
      throw new Error("Incorrect Password");

    const token = createtokenforuser(user);

    return token;
  }
);

const authModel = model("signup", authenticationschema);

module.exports = { authModel };
