import User from "../models/user.model.js";
import bcryptjs from "bcryptjs" 
export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exits" });
    }
    // hash password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password,salt)

    const boyProfilePic = "https://avatar.iran.liara.run/public/boy";
    const girlProfilePic = "https://avatar.iran.liara.run/public/girl";
    const newUser = new User({
      fullname,
      username,
      password:hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if(newUser){
        await newUser.save();
        res
          .status(201)
          .json({
            _id: newUser._id,
            fullName: newUser.fullname,
            userName: newUser.username,
            profilePic: newUser.profilePic,
          });
    }
    else{
        res.status(400).json({error:"Invalid user data"})

    }
    
  } catch (error) {
    console.log("Error in signup controller", error.message)
  res.status(500).json({error:"Internal Server Error"});
  }
};
export const login = (req, res) => {
  res.send("login user");
};
export const logout = (req, res) => {
  res.send("logout user");
};
